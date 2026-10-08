# Cotizador Herrera Producciones

PWA estática para la temporada 2026/2027. Cotiza servicios y packs por horas, con traslado separado, abono del 30% y saldo automático. Exporta una imagen PNG y abre el menú de compartir del teléfono cuando está disponible.

## Publicar en Netlify

Descomprime `Cotizador_Herrera_Netlify.zip`. Sube la carpeta que contiene `index.html` a Netlify Drop (https://app.netlify.com/drop). No requiere instalación ni compilación. Netlify asigna una dirección HTTPS.

## Instalar en iPhone

Abre la dirección HTTPS en Safari. Compartir → Añadir a pantalla de inicio → abrir como app, si aparece → Añadir. Abre una vez con internet para guardar los archivos del modo offline.

## Uso

Completa cliente, evento, fecha, inicio y fin de activación y lugar. Selecciona servicios, duración y variante Plataforma 360/Aero360 para los packs correspondientes. Agrega cada línea. Puedes ajustar precio y descripción para acuerdos especiales. Ingresa el traslado, revisa el total y descarga o comparte el PNG. Si no hay menú de compartir, descarga la imagen y adjúntala manualmente en WhatsApp.

El abono mostrado es el importe requerido para reservar; la app no registra ni comprueba pagos. Tampoco comprueba disponibilidad, no bloquea fechas y no envía mensajes. Confirma disponibilidad con el equipo antes de aceptar la reserva. El espejo de los packs permanece durante todo el evento.

## Datos

El borrador queda solo en localStorage del navegador de este dispositivo. No hay base de datos ni sincronización entre dispositivos. Borrar datos del navegador puede eliminarlo. Usa Descargar respaldo para conservar o mover la cotización; Cargar respaldo permite restaurarla. La ubicación Maps se conserva en el borrador, no aparece como enlace clicable en el PNG. El teléfono del cliente se muestra si se completa.

## Tarifas incluidas

Plataforma360/Aero360: 120.000/180.000; Fotocabina:160.000/230.000; Punto Foto:120.000/170.000 (2/3 horas). Selfie Mirror:60.000 por evento. Eco de Amor:60.000/90.000/120.000 (1/2/3 horas). Arco:80.000. Puertas+arco:100.000.

Packs 2/3 horas: Dúo Content160.000/220.000; Dúo Fotos200.000/270.000; Dúo Fiesta250.000/380.000; Dúo Fiesta Digital230.000/360.000; Pack Estrella300.000/430.000; Dúo Digital160.000/210.000; Todo incluido Fotocabina390.000/540.000; Todo incluido Punto Foto360.000/490.000.

Opcionales: Álbum30.000; hora adicional360/Aero60.000; hora adicionalFotocabina70.000. No se inventaron tarifas de otros adicionales. Todos los valores son CLP. Tarifas modificables en el arreglo `catalog` de `app.js`. Sora y Montserrat proceden de Google Fonts (SIL Open Font License).

La plantilla PNG se dibuja con Canvas y adapta su altura a las líneas. El logo oficial se conserva en `logo.png`. La referencia generada tiene fondo de textura suave; la exportación usa crema liso para asegurar legibilidad y consistencia.
