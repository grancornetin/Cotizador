---
name: Cotizador · Centro de mando
description: Acuerdos, cobros y trabajos con una próxima acción clara; marca propia en cada documento.
colors:
  primary: "#2457c5"
  primary-hover: "#1c48aa"
  primary-active: "#163e94"
  selection: "#eaf0fd"
  selection-ink: "#214ca5"
  neutral-bg: "#f6f7f9"
  surface: "#ffffff"
  ink: "#1b1d22"
  muted: "#596273"
  business-muted: "#565c68"
  divider: "#e1e5eb"
  business-divider: "#d7dbe2"
  field-border: "#c5cad3"
  success-bg: "#e7f2eb"
  success-ink: "#20643d"
  warning-bg: "#fff3da"
  warning-ink: "#795300"
  danger-ink: "#a12626"
  service-paper: "#f5f0e8"
  service-ink: "#1b1918"
  service-champagne: "#cfaf74"
  service-muted: "#675b4c"
  service-divider: "#d6cbb9"
  service-dark-divider: "#5f5548"
  service-dark-muted: "#d1c3b1"
  service-dark-body: "#e2d8ca"
  service-dark-note: "#c5b8a7"
  service-focus: "#a33e37"
  service-field-border: "#ac9d88"
  service-field-bg: "#fffdf9"
  service-action: "#b81636"
  service-primary-hover: "#98122c"
  service-experience-hover: "#eadfcf"
  service-warm-emphasis: "#836038"
  service-ochre-mark: "#8d6131"
  service-champagne-divider: "#a88850"
  service-champagne-ink: "#45321a"
typography:
  service-fotocabina-name:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(52px,7.5vw,96px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  service-fotocabina-statement:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(40px,4.8vw,68px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  service-display:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(42px,6.6vw,92px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  service-headline:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(32px,4.2vw,62px)"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-0.04em"
  service-title:
    fontFamily: "Sora, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.35
  service-body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  service-action:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.45
  service-field:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  service-caption:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  service-experience-display:
    fontFamily: "Sora, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.035em"
  service-experience-word:
    fontFamily: "Sora, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  display:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "28px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "20px"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  section:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "18px"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  title:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "14px"
    fontWeight: 550
    lineHeight: 1.5
  meta:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  service-field: "7px"
  service-control: "8px"
  service-action: "9px"
  service-panel: "12px"
  badge: "5px"
  control: "8px"
  card: "10px"
  panel: "12px"
  dialog: "16px"
spacing:
  service-compact: "10px"
  service-field: "15px"
  service-related: "20px"
  service-group: "30px"
  service-section: "54px"
  service-wide: "96px"
  compact: "8px"
  related: "12px"
  field: "16px"
  row: "20px"
  group: "24px"
  section: "32px"
  wide: "40px"
components:
  service-button-primary:
    backgroundColor: "{colors.service-action}"
    textColor: "{colors.service-paper}"
    typography: "{typography.service-action}"
    rounded: "{rounded.service-action}"
    padding: "16px 24px"
    height: "56px"
  service-button-primary-hover:
    backgroundColor: "{colors.service-primary-hover}"
    textColor: "{colors.service-paper}"
  service-input:
    backgroundColor: "{colors.service-field-bg}"
    textColor: "{colors.service-ink}"
    typography: "{typography.service-field}"
    rounded: "{rounded.service-field}"
    padding: "13px 10px"
    height: "50px"
  service-duration-selected:
    backgroundColor: "{colors.service-champagne}"
    textColor: "{colors.service-ink}"
    rounded: "{rounded.service-action}"
    padding: "19px 16px 19px 44px"
  service-tab-selected:
    backgroundColor: "transparent"
    textColor: "{colors.service-champagne}"
    padding: "15px 0"
    height: "58px"
  service-inquiry-card:
    backgroundColor: "{colors.service-paper}"
    textColor: "{colors.service-ink}"
    rounded: "{rounded.service-panel}"
    padding: "30px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.surface}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.selection}"
    textColor: "{colors.selection-ink}"
    rounded: "{rounded.control}"
    padding: "11px 17px"
    height: "44px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "#344054"
    rounded: "{rounded.control}"
    padding: "11px 17px"
    height: "44px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
    height: "44px"
  navigation-active:
    backgroundColor: "{colors.selection}"
    textColor: "{colors.selection-ink}"
    rounded: "{rounded.control}"
    padding: "11px 14px"
    height: "46px"
  badge-warning:
    backgroundColor: "{colors.warning-bg}"
    textColor: "{colors.warning-ink}"
    rounded: "{rounded.badge}"
    padding: "4px 8px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  work-row:
    textColor: "{colors.ink}"
    padding: "20px 0"
---

## Restricción V2 vigente · 22-10-2026 · DEC-038

### Sistema de interfaz V2 implementado · 27-10-2026 · ACT-156–162

Familia aislada en `src/v2/styles.css`, aplicada a `/v2/`; frontmatter y estilos anteriores conservan su ámbito V1/público. Fondo `#f7f8f8`, superficie `#fff`, texto `#172320`, secundario `#586660`, línea `#dce3df`, acción `#146253`, presión `#0c4a3e`, selección `#e6f1ec`, error `#a33131`, aviso `#745314`. Estados incluyen texto; no solo color. Fuente system-ui/-apple-system, campos17px, título34px, acciones48px, foco visible, safe areas/dvh y movimiento reducido. Cuatro destinos Hoy/Agenda/Cotizaciones/Más, navegación inferior móvil y lateral escritorio; listas por fecha, ficha y formulario de una columna. Diálogos nombrados para revisión/confirmación, persistencia comunicada después del commit.

Dirección y componentes en [brief V2](.impeccable/surfaces/herrera-v2-agenda.md); comportamiento y límites en [guía](docs/V2-AGENDA.md). Salida PNG sigue usando `classic@1` original y sus snapshots/fuentes: este tema no modifica cotizaciones. Evidencia Chrome390 y escritorio; prueba física iPhone/VoiceOver y certificación WCAG pendientes. Revisión162 sin defectos materiales visibles; no significa validación integral del producto.

El propietario exige conservar el diseño PNG actual de cotizaciones: composición Clásico, logo, marfil/crema, tinta oscura, separadores/total dorados, fuentes, jerarquía y bloques. La interfaz V2 personal puede rediseñarse; sus tokens nunca reemplazan snapshots ni el renderer clásico. V1 y páginas de servicio mantienen sus sistemas durante la transición. [Contrato y bases V2](docs/V2-HERRERA-PLAN.md), [auditoría técnica](docs/agentes/ACT-153-v2-technical.md). El sistema operativo V2 aún es propuesta: no tomar los tokens candidatos como diseño implementado/aprobado ni retemar V1. Primero demostrar alta directa, ficha y agenda en iPhone; validación física pendiente.


### Sistema V2 «sensación nativa» · ACT-169/170 · 28-10-2026

Vigente solo en `/v2/` (`src/v2/styles.css`, `commercial.css`, `motion.css`, `feedback.js`). No modifica la PNG de cotización ni V1/páginas públicas.

- **Tipografía:** system-ui/-apple-system (SF en iPhone). Título de página 34px/800, tracking -0.04em; sección 18-19px/700; cuerpo 16px; metadatos 12-13px; rótulos en mayúscula pequeña 12px/700 con tracking .05em. Campos 17px (evita zoom de iOS). Cifras de dinero y horas con `tabular-nums`; total de cotización 32-36px/800.
- **Espaciado y forma:** base 4px (4/8/12/16/20/24/32). Tarjetas radio 16, controles 12, etiquetas pastilla. Márgenes de pantalla 16px (móvil) y 24-40px (escritorio). Profundidad solo con borde fino + sombra mínima; sombra mayor solo en hojas y avisos.
- **Jerarquía:** un título por pantalla, una acción primaria verde por pantalla; el resto secundaria/silenciosa. Estados siempre con texto y punto además del color (franja lateral en filas de agenda). Contraste medido: texto apagado 5.5:1 sobre fondo, 6:1 sobre tarjeta.
- **Tab bar:** cuatro destinos, 64px más safe-area, translúcida con blur (respaldo opaco), pastilla bajo el icono activo, etiquetas 11px. Rail lateral desde 1000px.
- **Áreas táctiles iPhone:** mínimo 44px (botones 48px, filas 88-96px); nada interactivo bajo la tab bar; acciones fijas por encima de ella.
- **Estados vacíos:** icono circular + titular de acción + una frase + un botón; nunca una tabla vacía.
- **Modo claro/oscuro:** tokens en `:root` con redefinición bajo `prefers-color-scheme: dark` (fondo #0e1512, tarjeta #16201b, tinta #e9f0ec, acento #4fc3a3, aviso #f0c76a, peligro #ff9b92); `theme-color` por esquema. Sin interruptor manual por ahora.
- **Movimiento:** resortes con `linear()` (`--spring`) y curva suave (`--spring-soft`); toque = escala .97 en 80ms que vuelve con resorte; entrada de pantalla 320ms con 8px de desplazamiento; aviso con resorte. Interrumpible: solo `transform`/`opacity` en transiciones CSS, sin bloquear la entrada. Hoja inferior (`.sheet`, `motion.css`): arrastrable, se cierra deslizando; estilos listos, integración en app.js pendiente.
- **Reduced-motion:** sin animaciones, sin escala al tocar, sin transiciones de hoja; háptica y sonido también se silencian.

### Referencias consultadas y estado de ACT-170 · 29-10-2026

Referencias: no se consultó el MCP 21st.dev ni se cargaron las skills apple-design/emil-design-eng en esta pasada (la sesión se interrumpió); no se tomó código ni composición de ninguna referencia externa. Los criterios aplicados proceden de principios generales ya recogidos arriba (resortes interrumpibles, toque con escala, hoja arrastrable, reduced-motion). Pendiente: consulta breve de agenda, dashboard y bottom sheet y registro de qué se toma de cada una.

Implementado en `src/v2/motion.js`: hoja inferior (`openSheet`) con arrastre por puntero, cierre por deslizamiento, fondo o Escape, resorte interrumpible (un nuevo toque toma la posición actual), foco atrapado, `inert` en el resto de la app, retorno de foco, `role=dialog` con `aria-labelledby/describedby`, y reduced-motion sin animación. `confirmAction` y `askDiscard` de `app.js` usan la hoja con las mismas Promise. La confirmación con motivo de `money-ui.js` sigue siendo un `<dialog>` propio. `initMotion()` dispara háptica/sonido en botones, tab bar y controles segmentados, y háptica al escribir solo si el ajuste está activo. Deslizar-para-acción no se implementó: no hay acción reversible segura. Ajustes «Sonidos», «Vibración» y «Háptica al escribir» y «Exportar todo ahora» en Más.

### Movimiento, háptica y sonido

`src/v2/feedback.js` expone `feedback.haptic.tap/select/success/warning/error` y `feedback.sound.tap/success/error/swipe`. Háptica: `navigator.vibrate` donde exista; en iOS Safari el truco de un `input[type=checkbox][switch]` dentro de un label oculto que se alterna (iOS 17.4+; sin garantía, degrada en silencio). Sonido: Web Audio con osciladores seno de 50-200ms, ganancia 0.03-0.07, `AudioContext` creado en el primer gesto; sin archivos. Tonos: tap 620Hz corto; success quinta ascendente (523→784Hz); error descendente grave (196→165Hz); swipe dos notas bajas. Ajustes por dispositivo en `localStorage` (`herrera-v2-feedback`: sonido y vibración activados, «háptica al escribir» apagada por defecto); no son datos del negocio, por eso no pasan por el almacén V2. Con `prefers-reduced-motion` no hay vibración ni sonido. Háptica real de iOS y sonido en iPhone: pendiente de confirmar por el dueño.

# Design System: Cotizador · Centro de mando

## Overview

### Catálogo público ampliado · ACT-147/149 · 21-10-2026

Extensión de la familia Herrera existente, según [contrato](.impeccable/surfaces/herrera-catalog-expansion.md): `/packs/` compara ocho ofertas en siete familias visuales; Todo Incluido reúne dos variantes explícitas. Ocho fichas nuevas completan catorce fichas más el índice. Las tarjetas fotográficas conducen a una selección concreta; no convierten el comparador en una tabla operativa ni duplican todos los vídeos. `scripts/pack-index.mjs` y `scripts/service-detail.mjs` generan estas composiciones desde proyecciones comerciales públicas separadas del catálogo privado.

La actualización del propietario autoriza CTA cereza (`service-action`) y hover cereza profundo (`service-primary-hover`) exclusivamente en `src/styles/service-page.css`. Champagne conserva selección y bandas de consulta; marfil, espresso y Sora/Montserrat locales continúan. Los tokens y componentes Operate no cambian. Los clamps y geometría de las nuevas tarjetas/fichas son composición local, no una nueva escala global.

Variantes de fotografía/estructura, duraciones, un equipo 360 y opcionales son selecciones explícitas. El contenido distingue Punto Foto (hasta216 tiras5×15cm, después digital) de impresión ilimitada durante contrato de Fotocabina; Eco tiene horario definido; Mirror permanece durante el evento. Precios exactos netos, IVA19% con factura y traslado aparte según [fuente pública autorizada](docs/HERRERA-WEB-ACTUALIZACION-2026-10-21.md). Consultar no reserva ni cobra.

QA recibida de ACT-147:319pruebas/build158 y evidencia `.local/ACT-147-full-browser.json` de18pantallas,16selecciones con WhatsApp interceptado, nueve rutas sinJS y nueve offline. ACT-149 coteja documentación y código; no ejecuta esas pruebas ni acredita publicación, iPhone físico o conversión real. Revisión fresca ACT-148 e integración/publicación corresponden al principal.

### Consulta conversacional compartida · ACT-121

Fotocabina, Pack Estrella y Plataforma 360 usan un mismo bloque de consulta generado desde `scripts/templates/inquiry.html`. La acción WhatsApp aparece antes de pedir datos; fecha, hora, lugar y motivo viven bajo un disclosure nativo opcional. Mantiene la tarjeta marfil, Sora/Montserrat, controles y foco existentes. El summary usa14px, alto mínimo48px y borde horizontal del sistema; los campos conservan16px y separación20px. No introduce nueva paleta ni escala; los45tokens previos permanecen.

El mensaje usa frases con la selección real, contexto voluntario y una referencia de subtotal más traslado. No enumera descartes ni atribuye aceptación. La regla editorial es explicar valor y condiciones útiles, sin mencionar servicios ajenos solo para negar inclusión. El control de error abre el detalle y enfoca el campo; sinJS solo ofrece el enlace directo. [Guía de consultas](docs/especificacion/CONSULTAS-PUBLICAS.md). Revisión visual ACT-122 y cierre documental del principal tras límite de ACT-123; no equivalen a prueba física ni conversión.

### Ampliación pública · ACT-101 / medios ACT-102–105

La ficha [Pack Estrella](.impeccable/surfaces/pack-estrella.md) añade un mundo Persuade de Herrera junto al mundo Operate documentado abajo. Su dirección es **«Invitación editorial con selección viva»**: tipografía expresiva, papel marfil, tinta espresso y champagne para reunir tres experiencias y conversar sobre una celebración. Los tokens `service-*` pertenecen exclusivamente a las páginas públicas; el CSS independiente los implementa mediante variables locales `--paper`, `--ink`, `--gold`, `--muted`, `--line` y `--dark-line`. Esos nombres locales no son aliases del shell. El namespace documental evita mezclar ambos sistemas sin modificar el runtime.

La ficha conserva el logo raster existente y fuentes locales. ACT-106/109 incorporan la sesión en cámara rápida elegida por el propietario, previews silenciosos de portada y medios agrupados por servicio. ACT-113 añade la referencia de personalización R01 aportada por el propietario: ocho vídeos completos, tres previews y diez imágenes/posters,21 derivados; nueve fuentes del inventario original39 y una referencia separada. Los originales permanecen intactos en la carpeta privada ignorada; no se publica la biblioteca ni se crea un cargador autoservicio. La procedencia de los diez rasters consta en EXIF/sidecars y los hashes en [el manifiesto](docs/medios/HERRERA-MEDIA-MANIFEST.json), con R01 en `references`. No se generaron imágenes. La evidencia no acredita conversión, equivalencia con Apple o una nueva validación Safari/iPhone físico; publicación efectiva en el maestro. [ACT-112](docs/agentes/ACT-112-contextual-documentation.md) conserva su cierre anterior; [ACT-115](docs/agentes/ACT-115-spacing-pendrive-documentation.md) documenta el refinamiento y [ACT-114](docs/agentes/ACT-114-spacing-pendrive-review.md) su revisión fresca. Los tokens y componentes Operate previos se conservan.

ACT-120 (16-10-2026) documenta la segunda ficha, [Fotocabina](.impeccable/surfaces/fotocabina.md), iniciada en ACT-117 el 15 de octubre. Extiende la misma marca y controles con una ventana de sesión y selección de duración/extras, sin convertir la composición de tres experiencias del pack en una regla para servicios individuales. Reutiliza ocho derivados existentes (cuatro MP4 y cuatro WebP) de M12, M15, M05 y R01; no añade imágenes, vídeos ni fuentes. Los cuatro rasters conservan sidecar y EXIF de procedencia; R01 continúa rotulado como referencia. [ACT-119](docs/agentes/ACT-119-fotocabina-review.md) entrega `ship` sin correcciones materiales y [ACT-120](docs/agentes/ACT-120-fotocabina-documentation.md) registra el cotejo propio de código, doce capturas, hashes y paridad documental. La publicación corresponde al maestro. Los HTML de ambas fichas se generan desde datos comerciales públicos y plantillas editoriales propias; la selección no modifica el catálogo privado ni acuerdos emitidos.

ACT-127 (17-10-2026) documenta [Plataforma 360](.impeccable/surfaces/plataforma-360.md), tercera ficha del mismo mundo público. Conserva paleta, fuentes, controles y consulta DEC-035; reutiliza la composición individual de Fotocabina con resultado M23 en portada, carril M24/M23 y montaje M20. Siete derivados existentes de M24/M23/M20/R01, sin raster nuevo ni asset modificado; R01 sigue siendo referencia de pendrive. La adaptación móvil divide el nombre en dos líneas y asigna 40% al marco vertical, con caption/pausa de 12px; titular y ritmo propios quedan en `extensions.servicePage.surfaces.plataforma360`, sin crear tokens globales para ajustes de esta ficha. Los 45 tokens públicos y todo Operate permanecen intactos. [ACT-126](docs/agentes/ACT-126-plataforma-review.md) entrega `ship` sin correcciones materiales sobre 18 capturas y QA local recibida; [ACT-127](docs/agentes/ACT-127-plataforma-documentation.md) registra el cotejo documental. Tres HTML se generan desde configuraciones públicas y plantillas; publicación y pruebas físicas se registran por separado en el maestro.

ACT-130 documenta el refinamiento ACT-128 del 17-10-2026: la preview M23 compartida con Pack se regenera desde el original a 720×1280/30fps, cuatro segundos sin audio y CRF20. El carril individual muestra M24/M25/M23/M20: participación, operación por nuestro equipo, resultado y montaje. El nuevo clip M25 conserva control manual y poster WebP con EXIF/sidecar de procedencia; la explicación de operación por Herrera aparece en lead, incluidos y FAQ. No añade M25 al pack. Dos derivados nuevos y una preview reemplazada dejan 23 assets públicos (12 MP4 y 11 rasters); los 39 originales privados permanecen intactos según la comprobación del coordinador. La composición, estilos, tarifas, consulta y los 45 tokens públicos se conservan. [ACT-130](docs/agentes/ACT-130-plataforma-quality-documentation.md) separa el cotejo documental propio de la revisión y QA del principal; estado de publicación en el maestro.

ACT-134 documenta [Selfie Mirror](.impeccable/surfaces/selfie-mirror.md), cuarta ficha pública construida en ACT-131 (17-10-2026). Extiende el mismo mundo Herrera y la composición individual de 360: nombre, titular «Las mejores poses pasan por aquí.» y ventana vertical M36; en móvil el marco ocupa 40% y el texto introductorio, CTA y precio pasan debajo. El carril reúne únicamente M36 uso con teléfonos y M33 detalles. La oferta se presenta como alcance fijo durante la celebración por $60.000 CLP más traslado, con vinilo, neón y set según disponibilidad; instalación/retiro, ausencia de operador y cuidado del cliente quedan explícitos. Sustituye los selectores de duración/extras por un resumen de alcance; consulta compartida y WhatsApp expresan ese alcance sin horas ficticias. Sus roles y ajustes locales viven en `extensions.servicePage.surfaces.selfieMirror`, sin nuevos tokens globales. Reutiliza cinco rutas de medios y regenera solo la preview M36 desde el original a 720×1280/30fps, cuatro segundos, CRF20 y sin audio, compartida con Pack. Los dos WebP conservan EXIF/sidecar: cero rasters nuevos y el inventario sigue en 23 derivados (12 MP4/11 rasters). [ACT-134](docs/agentes/ACT-134-mirror-documentation.md) separa el cotejo documental propio de la QA del principal; revisión ACT-133 y publicación se integran por el coordinador en el maestro. Los 45 tokens públicos y todo Operate permanecen intactos.

**Creative North Star: "Horario de trabajo claro"**

La interfaz operativa usa la disciplina de un horario ferroviario: ritmo de filas, numerales comparables y continuidad entre fecha, concepto y acción. La luz es diurna, el fondo frío y las superficies blancas. La metáfora gobierna la alineación y la densidad; los controles siguen siendo web nativos. Procede de la candidata 4 de siete, semilla `0dd994aa`, fijada en el [contrato de superficie](.impeccable/surfaces/src-app-js.md) y la [ejecución](docs/REDISENO-EJECUCION.md).

El trabajo y sus importes lideran la pantalla. La jerarquía permite retomar una propuesta, fijar un acuerdo, registrar un cobro manual y organizar una entrega conservando la historia. Venta, dinero y cumplimiento tienen estados independientes; el color acompaña palabras y acciones explícitas. La marca de cada empresa pertenece a su documento, sin teñir el entorno de operación.

ACT-081 reemplaza el registro operativo anterior tras el rediseño autorizado T-021. Conserva sus decisiones confirmadas sobre identidad documental, copias históricas y separación entre controles y documento. El antiguo drift HAL-009 queda como antecedente en el historial, no como autoridad para pantallas nuevas. Describe el build del workspace; publicación y pruebas de servicio se registran en el centro de comando.

**Key Characteristics:**

- Fondo frío, tinta nítida y azul de acción o selección.
- Listas con reglas finas y espacio; contenedores para grupos que necesitan una superficie.
- Fecha y hora en eje propio; importes y horarios con cifras tabulares.
- Navegación y campos nativos, foco visible y movimiento breve.
- Marca y condiciones capturadas por documento; conexiones pendientes expresadas con claridad.

## Colors

### Mundo público `service-*`

Champagne es el acento de selección y la superficie de consulta; espresso sostiene texto, sección de experiencias y acción principal. Marfil reúne lectura, formulario y barra móvil. Los neutros cálidos distinguen bordes y texto de apoyo; las variantes sobre espresso mantienen la lectura de detalles. El foco terracota separa interacción de selección. Los valores públicos normativos están en el frontmatter; hover, foco y sus límites están en `extensions.servicePage` del sidecar.

ACT-120 registra también el ocre del punto del nombre (`service-ochre-mark`) y el borde/tinta de apoyos sobre champagne (`service-champagne-divider`, `service-champagne-ink`). Los tres tonos ya existían en el CSS compartido de Pack Estrella; documentarlos no introduce una nueva paleta ni cambia el runtime.

**The Mundos separados Rule.** La identidad pública Herrera se aplica a la ficha de servicio; no sustituye la paleta operativa ni las copias de marca de documentos existentes.

La paleta operativa distingue trabajo, selección y estado con un acento azul sobre neutros fríos. Los valores normativos están en el frontmatter; los estados completos se muestran en el sidecar.

### Primary

- **Azul de acción** (`primary`): acciones principales, enlaces y foco. Hover/active del frontmatter corresponden a botones comerciales; el shell tiene variaciones cercanas propias en `command-center.css`.
- **Selección fría** (`selection`, `selection-ink`): destino activo y botones secundarios. El picker usa sus estados blancos/azules efectivos, no el antiguo crema.

### Neutral

- **Fondo de trabajo** (`neutral-bg`): lienzo de la app. **Superficie blanca** (`surface`): formularios, tarjetas de catálogo y diálogos.
- **Tinta** (`ink`): títulos, contenido e importes. **Texto de apoyo** (`muted`, `business-muted`): contexto, notas locales y fechas secundarias.
- **Regla fría** (`divider`, `business-divider`): filas y regiones. **Borde de campo** (`field-border`): controles comerciales; el editor usa su borde frío específico.
- **Estados semánticos** (`success-*`, `warning-*`, `danger-ink`): confirmación, saldo/devolución pendiente y corrección. Siempre incluyen texto; confirmado no significa pagado.

**The Marca en su documento Rule.** Los aliases CSS `--cream` y `--gold` resuelven al fondo frío y azul de la interfaz. Sus nombres heredados no autorizan introducir el tema Herrera en nuevos controles. El tema de un documento se obtiene de su snapshot.

La cotización conserva colores configurables y fuentes permitidas por empresa. Herrera usa crema, dorado, tinta, Sora y Montserrat como tema propio, visible en su Canvas y sus PNG. El recibo comercial actual conserva logo/emisor e información del acuerdo con una composición blanca y tipografía del sistema; no hereda toda la paleta ni las fuentes de la cotización.

## Typography

### Mundo público `service-*`

Sora semibold marca titulares, nombres de experiencias y total; Montserrat sostiene lectura y controles. Ambas se sirven desde `assets/fonts/`. El display del frontmatter es el escritorio: hasta el breakpoint público móvil usa `clamp(32px,8.8vw,55px)` con interlineado 1.15 y tracking −0.035em; en el ancho más estrecho pasa a 30px. El titular dentro de cada experiencia usa el rol `service-experience-display` a todos los anchos. Las palabras Fotos/Vídeos/Selfies usan `service-experience-word` en escritorio, 21px hasta 700px y 18px hasta 359px. Los títulos de sección móviles son 34px, los subtítulos 19px y el cuerpo de detalles 14px. Los campos mantienen 16px. La ficha usa ayudas de 12–13px; son valores observados y no una recomendación para reducir la escala de la app. Las cifras del total y barra móvil son tabulares. Las variaciones responsive completas están en el sidecar.

Fotocabina usa los roles específicos `service-fotocabina-name` para el nombre y `service-fotocabina-statement` para el mensaje junto a la sesión. Hasta 700px, el nombre usa `clamp(42px,11vw,56px)` y el mensaje `clamp(29px,8vw,38px)` con interlineado 1.16. Mantienen Sora semibold y el tracking público heredado. El texto introductorio pasa de 17px a 15px; la leyenda de la ventana de 12px a 11px. Estas variaciones y límites de ancho pertenecen a `extensions.servicePage.surfaces.fotocabina`, sin sustituir la escala de Pack Estrella ni de Operate.

**Display Font:** system-ui y los fallbacks del frontmatter. **Body Font:** la misma familia. **Label/Mono Font:** sin familia mono separada; cifras tabulares donde la comparación importa.

La voz es directa y de trabajo: títulos de peso intermedio, cuerpo cómodo y contexto más pequeño. Las familias de las cotizaciones son una decisión documental independiente.

### Hierarchy

- **Display:** título comercial de página; baja a 24px hasta 600px.
- **Headline:** títulos generales del shell; editor 25px/24px y Revisar 24px/23px según escritorio/móvil.
- **Section:** grupos comerciales y títulos de diálogo comercial.
- **Title:** cliente o concepto principal de fila y encabezados menores.
- **Body:** párrafos y campos editables; texto comercial de apoyo con ancho máximo de 70ch cuando corresponde.
- **Label:** etiquetas y controles secundarios. Botón comercial 15px/600; shell 14px/600. Navegación móvil y badges 12px; metadata 13px: roles auxiliares, no sustitutos del cuerpo editable.

**The Cifras comparables Rule.** Importes, hechos monetarios y horas usan `font-variant-numeric: tabular-nums`; las etiquetas y la moneda permanecen visibles. Un saldo no comparte significado con un total acordado.

Hay estilos heredados puntuales de Sora/Montserrat en marca de producto, leyendas y controles auxiliares. No se promueven a una segunda escala operativa ni justifican cambiar snapshots documentales. Su fuente final es la cascada cargada por `index.html`.

## Layout

### Mundo público `service-*`

El contenedor público centra el contenido con ancho máximo 1200px y márgenes amplios; sus márgenes laterales pasan de 48px a 24px, luego 20px y 16px según el ancho. Los puntos de cambio reales se registran en el sidecar. Las tres entradas de portada mantienen tres columnas también en móvil: medio, palabra y explicación. Pósteres y previews usan recorte `cover` centrado al 35% vertical; en escritorio miden 280px de alto y en móvil tienen proporción 9:16. El control de pausa común queda fuera de los enlaces. Experiencia, configuración, consulta y dudas abandonan las dos columnas en móvil. La fecha y hora se apilan para evitar desborde de los campos nativos. El recorrido y primer viewport pertenecen al [contrato de superficie](.impeccable/surfaces/pack-estrella.md), no se convierten en una plantilla universal.

Cada panel contiene su propio carril con scroll-snap y un encabezado `h3`: Fotocabina muestra sesión y exterior (M12/M15); 360 reúne participación, alternativa Aero, resultado y foto de montaje (M24/M01/M23/M20); Selfie Mirror muestra uso y detalles (M36/M33). La galería genérica se retiró: los medios complementan exclusivamente su experiencia. Los vídeos conservan proporción 9:16 y encuadre completo con `contain`; la foto de instalación usa 4:3 y `contain`. Las tarjetas miden hasta 300px; en móvil ocupan 85% del carril para insinuar la siguiente. Cada grupo tiene Anterior/Siguiente y contador propio; los botones aparecen si hay desborde y se desactivan en los extremos. La pista de 360 aclara que Plataforma y Aero son alternativas y que el pack incluye una opción.

Hasta 700px, el bloque visual reserva 32px inferiores entre navegación y título comercial siguiente; el carril deja de aportar margen inferior y los controles reciben 20px superiores, manteniendo botones de al menos 44px. ACT-113 corrige el espaciado observado en la captura física del propietario y el antecedente R2 de [ACT-111](docs/agentes/ACT-111-contextual-review.md), que antes se dejó como mejora menor. El coordinador verifica una separación real de 32px en 320/390/430; escritorio conserva sus dos columnas. Son medidas de este refinamiento de la ficha, sin ampliar la escala global.

La barra inferior móvil conserva precio y pendientes, respeta safe-area y se retira cuando el CTA de portada o formulario están visibles o el foco está dentro del formulario. Su espacio de reserva en el pie y scroll evita cubrir contenido. Esta descripción procede del código y capturas; no certifica teclado ni Safari físicos.

Fotocabina conserva el contenedor y las secciones compartidas. Su portada empareja mensaje y una ventana 9:16: escritorio usa `minmax(0,1fr) minmax(220px,320px)` y gap de 100px (48px hasta 1000px); hasta 700px usa `minmax(0,1fr) minmax(0,43%)` y gap de 18px. Introducción, CTA y precio ocupan después ambas columnas en móvil. La ventana hereda `cover` y posición vertical al 35%; los dos clips completos conservan `contain`, carril contextual y separación de 32px antes de incluidos. La configuración omite el selector de equipo del pack; el enlace a Pack Estrella aparece subordinado después de consulta y dudas. Son decisiones de esta superficie, recogidas en su contrato, no una plantilla universal.

Escritorio: cabecera sticky mínima de 80px y espacio principal de hasta 1600px. Rail de 224px, regla y gap de 32px; contenido comercial hasta 1120px y formularios hasta 650px. A 1099px o menos, rail de 190px y gap de 24px. A 760px o menos, una columna, margen lateral de 16px y cabecera mínima de 70px.

Móvil muestra Inicio, Ventas, Agenda y Más en cuatro destinos inferiores con área mínima de 52px. Más reúne recursos y ajustes. Safe-area añade espacio al pie y el contenido reserva altura para la barra. En cotización se oculta esta navegación y gobiernan Volver/Continuar; Revisar tiene una superficie propia también en escritorio. La antigua composición de editor y preview simultáneos deja de ser la regla vigente.

Inicio muestra fecha actual y tres grupos de atención; desde 1050px organiza propuestas/saldos en dos columnas y trabajo debajo. Las filas crecen con texto largo. Agenda separa fecha/hora de cliente/concepto: eje temporal de 88px, 72px hasta 600px; las acciones se alinean bajo el cuerpo, o en columna de 340px desde 1050px cuando existen. El color no determina el orden ni la lectura de compromisos.

El ritmo usa la escala del frontmatter: campos relacionados, grupos y secciones reciben espacio creciente. Listas comerciales con regla entre filas; Empresa tiene superficies de formulario y muestra de marca, apiladas al reducir el ancho. Filtros y acciones se envuelven; fechas/horas restringen su ancho al contenedor.

**The Eje temporal Rule.** La fecha y la hora forman un eje estable frente al contenido; cambiar la longitud del concepto no desplaza el inicio de la acción a una columna arbitraria.

## Elevation & Depth

### Mundo público `service-*`

La ficha pública no usa sombras ni blur. La profundidad procede de secciones marfil/espresso/champagne, reglas finas y el formulario marfil sobre champagne. La barra inferior es opaca y tiene un borde superior; su superposición responde a una acción de consulta.

Superficies de trabajo planas con bordes finos y cambios tonales. Paneles y tarjetas sin sombra genérica. Canvas tiene sombra tenue; diálogos comerciales proyectan sombra y oscurecen el fondo. La barra móvil y los pies de acciones usan blanco/fondo translúcido y blur funcional para conservar contexto. El sidecar guarda los valores exactos.

**The Profundidad funcional Rule.** Añadir profundidad cuando una superficie se superpone o representa un documento, no para convertir cada fila operativa en un objeto flotante.

Movimiento observado: estados de botón (140ms, ease-out), números de etapa (160ms), entrada de etapa (180ms, desplazamiento de 5px), marcador de pestaña y diálogo de selección (200ms, cubic-bezier(.16,1,.3,1)). El botón comercial cambia color sin transform; el genérico baja 1px al pulsar. Reduced-motion elimina animaciones/transiciones y desplazamiento al pulsar; el estado conserva texto y foco. El sonido es opcional y comienza apagado.

## Shapes

### Mundo público `service-*`

La estructura editorial usa reglas rectas. Botones y duración comparten una curva discreta, los campos una menor y el panel de consulta una mayor; los radios públicos están en el frontmatter. Los marcos de portada tienen radio 10px en escritorio y 8px en móvil; reproductores y foto contextual, 12px. Las bandas oscuras de `contain` conservan personas y montaje completos. Los iconos son SVG de trazo inline, sin emoji decorativo. El logo conserva su archivo y proporción original.

Controles de esquinas suaves y radio pequeño; tarjetas y paneles ligeramente más amplios; diálogo comercial más redondeado. Radios normativos en frontmatter. Badges compactos se distinguen de botones por tamaño y función; círculo para número de etapa. Bordes de 1px organizan campos y filas.

Iconografía operativa SVG geométrico inline, normalmente de 20px. Sin rasters nuevos ni iconos tipográficos. El logo de empresa conserva proporción y transparencia; no recortarlo para fabricar un avatar. Los rasters preexistentes mantienen su procedencia real, sin atribuirles generación nueva.

## Components

### Mundo público `service-*`

- **Acción principal:** tinta sobre papel, ancho adaptable, foco terracota visible y hover solo con puntero fino. `height` en el frontmatter documenta el mínimo CSS; no obliga a cortar textos. La versión de portada móvil tiene un mínimo de 54px y la barra de 48px.
- **Explorador de experiencias:** pestañas con estado textual/ARIA, subrayado champagne y panel único con JS. Flechas, Home y End gestionan foco; sin JS se muestran los tres paneles y se ocultan pestañas.
- **Índice audiovisual:** tres enlaces con pósteres auténticos, alt descriptivo y nombres Fotos/Vídeos/Selfies; cada enlace abre su panel. Sobre ellos se montan tres previews reales de 432×768 y 4–4,167s, sin pista de audio, `muted`, `loop` y `playsInline`. Se reproducen automáticamente al estar visibles; «Pausar vistas previas» tiene mínimo 44px y conserva la pausa al desplazarse. Fuera de pantalla, con documento oculto o un vídeo completo activo se detienen. Reduced-motion, ausencia de JS, bloqueo de autoplay y error conservan el póster y los enlaces; el bloqueo/error permite reintentar desde el control común. El recorte de portada no se aplica al reproductor de detalle.
- **Medios contextuales nativos:** los grupos `cabina`, `360`, `mirror` y `album` reciben únicamente derivados autorizados bajo `/assets/services/`. Fotocabina conserva M12 en cámara rápida y M15 exterior (11–17,798s de origen); Mirror añade M33 detalles (0–8s) a M36. Cada pieza tiene caption y descripción, sin duplicar el principal en una galería global. Vídeos completos con controles, `playsInline`, `preload="none"`, sin pista de audio, con muted/defaultMuted y sin autoplay. Reproducir uno pausa los demás; cambiar pestaña o plegar el álbum pausa el vídeo oculto. Espera, error/offline y botón Reintentar vídeo tienen texto visible. Worker v24 conserva pósteres y referencia del pendrive para lectura offline, pero excluye de precache/caché los once MP4, incluidos los previews; reproducirlos requiere conexión.
- **Selección de duración y extras:** radios/checkboxes nativos; duración seleccionada champagne. Total, resumen, barra y mensaje WhatsApp reflejan selección. El propietario confirma el 15-10-2026 el pendrive opcional por $15.000 CLP, con todos los medios digitales del evento y grabado personalizado. Dos horas con pendrive suman $315.000; tres horas con álbum y pendrive, $475.000; siempre más traslado pendiente según ubicación. La confirmación sustituye el precio pendiente de esta ficha y conserva cotizaciones emitidas y catálogo privado. Cambiar selección no confirma disponibilidad.
- **Álbum opcional:** `details`/`summary` muestra un vídeo con caption y precio aparte. Abrir «Ver el álbum opcional» no marca el checkbox ni modifica el subtotal; la selección comercial permanece en extras.
- **Referencia del pendrive:** disclosure nativo estático separado del checkbox. Abrir «Ver referencia del pendrive» no selecciona el extra ni modifica el subtotal. Imagen cuadrada de 960×960, ancho máximo 320px, radio 12px, carga diferida y caption de 12px: «Imagen de referencia. El grabado se personaliza para tu celebración.». R01 es referencia aportada, sin atribuirle fotografía verificada de un producto entregado.
- **Consulta:** campos opcionales con etiquetas visibles, errores explícitos y botón de WhatsApp. La persona revisa y envía el mensaje fuera de la ficha. El enlace directo sirve de fallback; el configurador se oculta sin JS. No hay guardado de datos desde esta página.
- **Dudas:** `details`/`summary` nativos con icono de apertura y reglas. Los captions contextuales delimitan lo mostrado; no se atribuye a cada celebración la contratación del pack completo. Sin JS se conservan las tres imágenes de portada y el contenido comercial, se muestran los tres paneles y no se montan los medios dinámicos.

La entrada de experiencias usa opacity/translateY, una sola vez; el cambio de pestaña no bloquea scroll. Estados y barra usan transiciones breves. `prefers-reduced-motion: reduce` retira animaciones, transiciones, scroll suave, escala de pulsación y reproducción automática de previews. Duraciones, easing y snippets públicos viven en `extensions.servicePage`; no alteran componentes Operate. ACT-113 verifica 281 pruebas/check/build104 y worker23 con 93 entradas sin MP4; precios, WhatsApp interceptado, offline y no-JS pertenecen a la comprobación del coordinador. ACT-114 revisa el lote final y ACT-115 comprueba la documentación. La captura física inicial motiva el arreglo; no hay una prueba física posterior acreditada. Publicación, hardware y conversión se registran por separado.

### Buttons

Acción explícita y legible. Mínimo de 44px; pasos de cotización de 48px. El frontmatter registra la altura mínima, no máxima: una etiqueta larga puede crecer. Primario azul/blanco, secundario azul suave, quiet de contorno tenue o texto; neutral comercial blanco con borde. Hover con pointer fino y hover disponible. Focus-visible: contorno azul de 3px, offset de 3px. Disabled atenúa el control; el contexto explica su indisponibilidad.

### Chips

Badges de fondo tonal y texto explícito. Éxito indica el estado comunicado; advertencia identifica saldo o devolución pendiente. No confirman un abono bancario ni sustituyen acciones.

### Cards / Containers

Catálogo y selector de artículos con tarjetas blancas y borde; selección y foco azules. Sus estados efectivos se neutralizan en la hoja final. Paneles agrupan trabajo relacionado; en móvil el editor se integra en el fondo. Listados comerciales abiertos con reglas y sin sombra.

### Inputs / Fields

Campos nativos blancos, borde frío, radio de control, texto editable de 16px y altura mínima de 44px. Etiqueta fuera del placeholder, foco azul y textarea de crecimiento vertical. Errores conservan datos y enlazan al campo. Formatos/moneda visibles. Los selectores compactos de cabecera son excepción tipográfica con área táctil mínima de 44px en las capturas verificadas; no aplicar su tamaño al formulario.

### Navigation

Rail con icono/texto, grupos trabajo/recursos, selección tonal azul y `aria-current`. Cuatro destinos fijos en móvil. Stepper Datos → Detalle → Importes → Revisar con retorno que conserva contenido; el círculo numérico no es el área táctil completa. Marca/Condiciones/Campos con pestañas y marcador fino azul. Más ofrece destinos explícitos, sin fingir módulos activos.

### Agenda y ficha de venta

Fila temporal con fecha, horario, cliente, concepto, lugar opcional, estado/zona y acciones. Ficha de venta con pendiente, total acordado y recibido registrado como prioridad; acuerdo original, actividad y correcciones bajo disclosures. Programar/completar trabajo conserva la independencia de cobros. Inicio reutiliza la fila sin obligar a mostrar todas sus acciones.

### Diálogos y feedback

Revisión de operaciones con hechos, efectos y Cancelar/Confirmar. Selección de tarifa como panel inferior móvil; diálogo comercial centrado y contenido dentro del viewport. Fondo atenuado y overflow interno. Avisos distinguen cobro manual, guardado en dispositivo, error y conexión pendiente. Foco/retorno pertenecen al componente funcional, no a su animación.

### Documentos y layouts conservados

Cotización desde `appearanceSnapshot`, copias de datos/etiquetas/condiciones y assets de su versión. Fuentes permitidas Sora/Montserrat o sistema Arial según configuración. `src/export/layouts.js` registra ocho layouts versión 1: Clásico, Profesional compacto, Esencial, Membrete, Editorial, Inventario, Propuesta y Contraste. Cambiar Empresa o diseño de borrador no reescribe versiones previas. Textos largos crecen o paginan; esperar fuentes/recursos antes de medir/exportar. Visual de marca y Resumen WhatsApp siguen exploraciones; PDF no está implementado. Las tablas de detalle documental son independientes del C08 de gestión descartado.

La [revisión ACT-080](docs/agentes/ACT-080-command-finish-review.md) abrió 21 capturas válidas y puntuó F1–F4 resueltas. Su ship se limita a esas correcciones y ausencia de regresiones materiales observadas en el lote: no certifica funcionamiento integral, hardware físico, Apple, mercado ni publicación. Las capturas usan datos sintéticos de QA; pruebas funcionales y despliegue efectivo pertenecen al centro de comando.

## Do's and Don'ts

### Mundo público `service-*`

- **Do** conservar logo, fuentes y paleta confirmados en la ficha pública y aislar sus tokens de la app.
- **Do** expresar traslado, opcionales y consulta como tales, con precio y pendientes visibles.
- **Do** incorporar solo medios reales autorizados, conservar su procedencia y asignar cada muestra al servicio que explica.
- **Do** mantener pausa visible de previews y alternativa estática accesible con reduced-motion, no-JS, bloqueo o error.
- **Don't** mezclar 360 con Fotocabina o Mirror ni presentar el álbum opcional como parte incluida.
- **Don't** presentar fotos ficticias, stock o una lista vacía como evidencia del servicio.
- **Don't** equiparar capturas responsive o un prototipo funcional con conversión validada, publicación o pruebas físicas.

### Do:

- **Do** usar fondo frío, superficies blancas y azul para acciones y selección operativas.
- **Do** conservar eje temporal y números tabulares para comparar compromisos e importes.
- **Do** mantener campos editables de 16px, foco visible y controles principales de al menos 44px.
- **Do** dejar crecer textos y adaptar filas, filtros y acciones al ancho disponible.
- **Do** conservar marca, etiquetas, condiciones y recursos de cada copia documental.
- **Do** describir guardado local, cobro manual y conexiones pendientes con su estado real.

### Don't:

- **Don't** extender los aliases heredados crema/dorado al tema global o a nuevos controles.
- **Don't** recuperar C08 para gestión ni equipararlo a las tablas internas de un documento.
- **Don't** comunicar pagado, aceptado, sincronizado o conectado a partir de exportar o animar.
- **Don't** convertir herencias aisladas, valores de una corrección o límites de QA en reglas nuevas.
- **Don't** presentar responsive Chrome y capturas como prueba física, con usuarios o de publicación.

ACT-116 precisa solo reproducción pública: once MP4 sin pista de audio; seis derivados remuxeados sin recodificar vídeo. Previews y completos conservan controles de reproducción, proporciones y reglas de pausa. No se cambian tokens ni layout.
