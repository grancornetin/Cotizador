/** Static host build: Node builtins only, with the same allowlist as build.py. */
import {copyFileSync, existsSync, lstatSync, mkdirSync, readFileSync, realpathSync, rmSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {generateServicePages} from './service-pages.mjs';

export function readPublicFiles(root) {
  const source=readFileSync(path.join(root,'scripts','build.py'),'utf8');
  const declaration=source.match(/^PUBLIC_FILES\s*=\s*\(([\s\S]*?)^\)/m);
  if(!declaration)throw new Error('PUBLIC_FILES no es una tupla literal en scripts/build.py.');
  const body=declaration[1].replace(/#[^\r\n]*/g,'');
  const tokens=[...body.matchAll(/(["'])([A-Za-z0-9_./-]+)\1/g)];
  if(!tokens.length || body.replace(/(["'])([A-Za-z0-9_./-]+)\1/g,'').replace(/[\s,]/g,'')) {
    throw new Error('PUBLIC_FILES debe contener solo rutas literales, sin expresiones.');
  }
  const files=tokens.map(match=>match[2]);
  if(new Set(files).size!==files.length)throw new Error('PUBLIC_FILES contiene rutas duplicadas.');
  for(const name of files) {
    if(path.posix.isAbsolute(name) || name.split('/').some(part=>!part || part==='.' || part==='..') || name.startsWith('dist/')) {
      throw new Error(`Ruta pública inválida: ${name}`);
    }
  }
  return files;
}

export function build(workspaceRoot=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')) {
  generateServicePages();
  const root=realpathSync(workspaceRoot);
  const destination=path.resolve(root,'dist');
  // Resolve and check the exact deletion target before any recursive operation.
  if(path.dirname(destination)!==root || path.basename(destination)!=='dist')throw new Error('Salida fuera de dist/.');
  if(existsSync(destination)) {
    const stats=lstatSync(destination);
    if(stats.isSymbolicLink() || !stats.isDirectory() || realpathSync(destination)!==destination) {
      throw new Error('dist/ debe ser una carpeta real del proyecto, no un enlace.');
    }
  } else {
    // existsSync is false for broken symlinks; lstat still detects them.
    try {if(lstatSync(destination).isSymbolicLink())throw new Error('dist/ es un enlace inválido.');}
    catch(error) {if(error.code!=='ENOENT')throw error;}
  }
  const files=readPublicFiles(root);
  for(const name of files) {
    const source=path.resolve(root,...name.split('/'));
    const relative=path.relative(root,source);
    if(relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative))throw new Error(`Fuente fuera del proyecto: ${name}`);
    let segment=root;
    for(const part of name.split('/')) {
      segment=path.join(segment,part);
      if(lstatSync(segment).isSymbolicLink())throw new Error(`No se publican enlaces: ${name}`);
    }
    if(!lstatSync(source).isFile() || realpathSync(source)!==source)throw new Error(`Fuente pública inválida: ${name}`);
    const target=path.resolve(destination,...name.split('/'));
    const relativeTarget=path.relative(destination,target);
    if(relativeTarget.startsWith(`..${path.sep}`) || path.isAbsolute(relativeTarget) || !relativeTarget)throw new Error(`Destino inválido: ${name}`);
  }
  // All inputs and final paths are valid before replacing the generated folder.
  rmSync(destination,{recursive:true,force:true});
  for(const name of files) {
    const target=path.join(destination,...name.split('/'));
    mkdirSync(path.dirname(target),{recursive:true});
    copyFileSync(path.join(root,...name.split('/')),target);
  }
  return {destination,files};
}

if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const {files}=build();
  console.log(`Build listo: ${files.length} archivos en dist/ (Node, misma PUBLIC_FILES de Python)`);
}
