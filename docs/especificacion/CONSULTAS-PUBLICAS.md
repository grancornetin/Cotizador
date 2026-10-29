# Consultas públicas · conversación antes que formulario

ACT-121 · 16-10-2026 · Preferencia explícita del propietario para ambas fichas y las siguientes.

La página presenta el valor del servicio y explica sus condiciones donde ayudan a elegir. No mencionar servicios ajenos solo para negar su inclusión. Un enlace positivo a una combinación o pack puede ayudar a explorar; una advertencia sobre montaje/horario sigue siendo pertinente cuando cambia la decisión. Los extras se explican y seleccionan en su sección, sin repetir su exclusión junto a cada descripción.

El contacto es una conversación voluntaria: CTA WhatsApp visible sin rellenar datos. Fecha, hora, lugar y motivo se agregan solo si el visitante quiere, dentro de un desplegable opcional. Conservarlos al plegar y revelar/focar el campo si hay un error al consultar. Sin JavaScript, contenido y enlace directo funcionan; no ofrecer campos que el fallback no puede transportar.

El mensaje abre con interés por el servicio, duración y equipo elegido si corresponde. Solo menciona extras seleccionados, agrupados en una frase. Contexto voluntario en un párrafo breve; una única referencia de subtotal con traslado aparte. Cierra con una pregunta natural para cotizar. No listar opciones no elegidas, repetir límites de otros servicios, desglosar cada accesorio ni inventar que el cliente acepta condiciones. La cotización formal y la confirmación de reserva se acuerdan después con el equipo.

El generador usa `scripts/templates/inquiry.html` para ambas páginas y próximas fichas compatibles; textos del mensaje en `src/services/inquiry.js`. Nombres conversacionales por ficha/extra son datos públicos (`conversationName`), sin ifs por nicho ni importación del catálogo privado. Subtotales y validación siguen compartidos; no se modifican tarifas ni acuerdos emitidos. No es todavía un constructor universal de páginas ni una reserva automática.

Ejemplo Fotocabina con extras y datos voluntarios:

> ¡Hola! Me interesa la Fotocabina por 3 horas. Me gustaría agregar el álbum y el pendrive personalizado.
>
> Sería para un matrimonio, el 21/04/2027 a las 19:30, en Talca.
>
> Vi mi selección en $275.000 CLP más traslado. ¿Me ayudas a cotizar?

Sin fecha/lugar, se omite el párrafo intermedio. Mirar un opcional no lo agrega al mensaje. WhatsApp permite revisar/editar el texto antes de enviarlo; la página no envía automáticamente ni registra datos personales.

PublicaciónACT-121verificada16-10-2026 en ambas fichas, runtimebf434283:288pruebas/build108/HTTPS108exactos/19privados404 y2flujos públicosPASS. Review122ship; cierre documental del principal tras cuota123. Sin envío real ni prueba física/conversión acreditada.


ACT-131 · Oferta fija: la duración por horas es opcional por modelo comercial, no un requisito universal de las fichas. `pricing.type: fixed` define precio y etiqueta de alcance; `conversationScope` es dato público de la ficha. Selfie Mirror comunica permanencia durante celebración por60.000CLP más traslado. No renderizar selectores de horas/extras inexistentes ni añadir horas al mensaje. Una selección explícita incompatible se rechaza en vez de cobrar otra tarifa. Ejemplo: «¡Hola! Me interesa el Selfie Mirror para mi celebración. […] Vi mi selección en $60.000 CLP más traslado. ¿Me ayudas a cotizar?». Contexto voluntario conserva el mismo contrato de validación y privacidad.
