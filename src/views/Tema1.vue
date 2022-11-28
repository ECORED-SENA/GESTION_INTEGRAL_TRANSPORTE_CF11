<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión del transporte (despacho y recibo)
    img(src='@/assets/curso/tema1/img1.jpg', alt='Texto que describa la imagen')
    p.mt-5 Para el transporte de mercancías y pasajeros, se deben contemplar los procesos relacionados con el despacho y el recibo; estos se pueden identificar según el modo o medio de transporte utilizado y se diferencian según la mercancía.
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.mt-5.txt(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.mt1.txt2
            p.mb-0 La premisa principal es asegurar la integridad del producto transportado, así como la seguridad y la vida de quienes operan o viajan en los equipos seleccionados.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1   Modo aéreo
    p El transporte de carga aérea se convierte en un modo multimodal de transporte. La mercancía debe ser recogida vía terrestre en el origen, para ser llevada al aeropuerto. En ocasiones: 
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-6.order-2.order-lg-1
              p La carga, antes de llegar al aeropuerto, es acopiada en bodegas de almacenamiento, donde un operador de transporte se encarga de consolidar y embalar la mercancía para una correcta identificación, clasificación, cubicación, entre otros. 
            .col-md-6.order-1.order-lg-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img3.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img4.png', alt='Texto que describa la imagen')
            .col-md-6
              p Al inicio del proceso, la entidad o el transportador responsable de la carga aérea debe emitir una Declaración de Seguridad del Envío (CDS), en la cual se indiquen las condiciones de seguridad desde el inicio y durante el recorrido hasta el destino.
          
          .row
            .col-md-6.order-2.order-lg-1
              p Al llegar al aeropuerto de origen, la mercancía ingresa a la aeronave asignada y es llevada hacia el aeropuerto de destino; pasa por bodegas donde la carga es desconsolidada, seleccionada y llevada al destino final; todo ello generalmente vía terrestre.
          
            .col-md-6.order-1.order-lg-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img5.png', alt='Texto que describa la imagen')

    .row.justify-content-center
      .col-lg-10
        p Observe un ejemplo gráfico del proceso: 
    img(src='@/assets/curso/tema1/img6.jpg', alt='Texto que describa la imagen')
    figcaption.text-small.mt-2 Nota. Tomada de la Organización Mundial de Aduanas (s. f.).


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img7.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En algunos casos, el valor de la mercancía transportada hace necesario su aseguramiento, mediante la expedición de pólizas de seguro que permitan garantizar la responsabilidad ante cualquier daño a la misma.

          br
          br
          | Para la denominada carga expresa, cuyo nombre hace referencia a aquella carga que se considera de entrega urgente, la tecnología ha facilitado el proceso, permitiendo que no se utilice papel y que la documentación obligatoria se pueda gestionar a través de medios electrónicos.
    p.mt-5 <strong> En el transporte aéreo de pasajeros:</strong>
    .row.mb-5.justify-content-center
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/1.png' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4
              p.text-center En la recepción y la salida del origen (inicio de viaje) es necesario el procedimiento conocido como “check-in”, donde el pasajero realiza un registro de confirmación al transportador aéreo (aerolínea), a través del cual confirma e indica su presencialidad en el vuelo previamente adquirido.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/2.png' alt='AvatarTop')

          .tarjeta.color-acento-contenido
            .p-4
              p.text-center Luego de este proceso, el pasajero recibe un “pase de abordar”. Este le permite ingresar a la aeronave, viajar a su destino y descender en el aeropuerto, sitio en el cual finaliza el contrato de transporte y, por tanto, la responsabilidad del transportador.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/3.png' alt='AvatarTop')

          .tarjeta.color-acento-contenido
            .p-4
              p.text-center Al finalizar el vuelo, no se hace necesario ningún registro de finalización, y si el pasajero porta consigo equipaje, lo podrá reclamar mediante el “talón de equipaje” que  fue entregado en el aeropuerto de origen.
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2   Modo marítimo
    p El transporte marítimo de carga presenta similitud frente al modo aéreo. En este caso, en lugar de aeropuertos, se encuentran puertos marítimos, la mercancía a transportar cumple procesos similares desde el inicio hasta el final, desde la recepción, pasando por el despacho, el puerto de origen, hasta el recibo en destino.
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img8.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.mt2
            p.mb-0 Para el transporte de pasajeros, la recepción y la emisión de los pasajes es similar al modo aéreo, permite la identificación del viajero y la responsabilidad de la naviera frente a la seguridad de este.
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3   Modo férreo
    p Este modo plantea recientemente, y gracias a los avances tecnológicos, una opción de movilización rápida y a bajos costos, accesibles para los pasajeros. En cuanto a la carga, igualmente, aquellos países que cuentan con la infraestructura ferroviaria adecuada para la movilización de mercancías logran significativas reducciones en costos frente a otros modos.
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.mt-5(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img9.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.mt2
            p.mb-0 La recepción, el despacho y el recibo de carga permiten garantizar la seguridad de la mercancía y los pasajeros. Para este fin, es necesario tener claridad respecto a los trayectos de movilización, ya que, como se ha evidenciado, el transporte internacional requiere documentos adicionales a los requeridos para transportes internos. 
    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4   Modo terrestre
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.mt-5(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img10.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.mt2
            p.mb-0 En este modo, se encuentra que en la recepción y el despacho se necesitan documentos como la planilla de viaje, el tiquete o boleto, la remesa, el manifiesto de carga, entre otros, los cuales cumplen el mismo objetivo: garantizar la seguridad de la carga o los pasajeros, con el objetivo de prestar servicios de calidad.
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bloque-texto-g.color-secundario.color-secundario
  background-color: transparent!important
.bloque-texto-g__texto.color-secundario
  background-color: #F6F6F6!important
  width: 65%
  right: 40%
  box-shadow: 4px 0px 16px 0px rgba(184,184,184,1)
  @media screen and ( max-width: 420px)
    right: 0%
  @media screen and ( max-width: 992px)
    width: 100%
.bloque-texto-g__img.color-secundario
  left: 50%
  @media screen and ( max-width: 420px)
    left: 0%
.pasos-a.color-acento-contenido .pasos-a__circle
  background-color: #FFB500
.bloque-texto-g.color-acento-botones.color-acento-botones
  .bloque-texto-g__img
    left: 50%!important
  .bloque-texto-g__texto
    right: 40%
  @media screen and ( max-width: 992px)
    .bloque-texto-g__img
      left: 0%!important
    .bloque-texto-g__texto
      right: 0%
.bloque-texto-g.color-acento-botones
  background-color: transparent!important

.bloque-texto-g__img
  width: 63%
  @media screen and ( max-width: 992px)
    width: 100%
.bloque-texto-g__texto.p-4.mt1.txt2
  box-shadow: 4px 0px 16px 0px rgba(184,184,184,1)
  background-color: #F6F6F6!important
.bloque-texto-g__texto.p-4.mt2
  background-color: #F6F6F6!important
</style>
