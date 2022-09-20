<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Rendimiento
    p Con el objetivo de optimizar las posibilidades de ingreso en la prestación del servicio y determinar la tarifa, se hace necesario considerar:
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Relación Volumen – Peso")
        .col-md-11.mb-4.mb-md-0
          p los elementos a transportar tienen un volumen y un peso. Al dividir estas cantidades, se obtiene esta relación. El llamado “Factor de estiba” presenta la relación volumen/peso y permite determinar el espacio que ocupa el producto unitarizado dentro de una bodega de carga. Cada modo de transporte tiene sus propias características, que dependen de la capacidad del equipo para transportar y las características del producto.
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2. 
            span Matriz de costos y tiempos en el país exportador
          img(src='@/assets/curso/tema4/img6.jpg', alt='Texto que describa la imagen')
      .row.justify-content-center(titulo="Cubicaje")
        .col-md-11.mb-4.mb-md-0
          p Corresponde al procedimiento de acomodación de las mercancías sobre el medio seleccionado de transporte.  Se tiene como objetivo acomodar la mayor cantidad de carga y aprovechar al máximo la capacidad, sin dejar de observar la normatividad, los requerimientos contractuales y las limitaciones técnicas del transporte.
      .row.justify-content-center(titulo="Número de sillas disponibles")
        .col-md-11.mb-4.mb-md-0
          p Esta cifra corresponde a la disponibilidad de asientos para pasajeros ofertada por la empresa de transporte, de acuerdo con los equipos disponibles y sus capacidades.


</template>

<script>
export default {
  name: 'Tema5',
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
.tarjeta--azul
  background-color: #F6F6F6
  border-bottom: solid 2px #707070
</style>
