<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 Durante la prestación de servicios de transporte, se encuentran diferentes procesos necesarios para el desarrollo del servicio. Luego de los diferentes acuerdos comerciales y contractuales entre las partes, se presenta el movimiento asignado, para el cual es necesaria una recepción de lo que se va a transportar, el despacho hacia el lugar de destino, el tránsito, y la recepción final, con la cual se da por completado el servicio.
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/i1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.mt1
            p.mb-0 Los anteriores procesos aplican tanto para las mercancías como para los pasajeros. El cliente evalúa temas de seguridad, rapidez, comodidad y costo.

    p.mt-4 Las empresas de transporte deben tener como objetivo principal contar con la mejor calidad posible en el servicio, y es por ello que, desde los procesos de despacho y recibo, es necesario prestar las mejores garantías que permitan iniciar y finalizar positivamente, solucionando rápida y eficazmente las novedades que se presenten.
    p Para la elaboración de este componente, se abordaron varios autores conocidos en 
      span.bc <strong>indicadores de recursos,</strong>
      |  de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la 
      span.bc <strong>gestión integral del transporte.</strong>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bloque-texto-g.color-secundario
  background-color: transparent!important
.bloque-texto-g__texto
  background-color: #F6F6F6!important
  width: 65%
  @media screen and ( max-width: 992px)
    width: 100%
</style>
