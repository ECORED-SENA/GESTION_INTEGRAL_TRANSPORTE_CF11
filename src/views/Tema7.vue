<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Matriz de producto o servicio no conforme (PQRS) 
    p Generalmente, al finalizar el servicio, el cliente cuenta con la posibilidad de generar la calificación correspondiente del servicio recibido, es allí donde las empresas de transporte, gracias a sus procesos de gestión interna, cuentan con sistemas de recepción, seguimiento, respuesta y opciones de mejora para los conocidos como PQRS: 
    TabsA.color-acento-contenido.mb-5.mt-4

      .tarjeta.color-acento-botones.p-4(titulo="(P) Peticiones")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema6/8.png', alt='Texto que describa la imagen')
          .col-xl-6
            h4 (P) Peticiones
            p Corresponde a una situación en la cual el usuario le presenta solicitud de información a la empresa en relación con el servicio contratado.
      .tarjeta.color-acento-botones.p-4(titulo="(Q) Quejas")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema6/9.png', alt='Texto que describa la imagen')
          .col-xl-6
            h4 (Q) Quejas
            p Corresponde a las expresiones del usuario relacionadas con una prestación del servicio de manera que generó inconformidades. 
      .tarjeta.color-acento-botones.p-4(titulo="(R) Reclamos")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema6/10.png', alt='Texto que describa la imagen')
          .col-xl-6
            h4 (R) Reclamos
            p Su objetivo es solicitar a la empresa que revise y, de ser necesario, corrija el procedimiento, generalmente económico, frente al servicio prestado.
      .tarjeta.color-acento-botones.p-4(titulo="(S) Sugerencias")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema6/11.png', alt='Texto que describa la imagen')
          .col-xl-6
            h4 (S) Sugerencias
            p Es la manifestación del usuario tendiente a las posibilidades de mejoramiento del servicio. 
    .titulo-sexto.color-acento-contenido
        h5 Tabla 2. 
        span Matriz de producto o servicio no conforme (PQRS)  
    img(src='@/assets/curso/tema6/12.svg', alt='Texto que describa la imagen')
                                           
    
  
</template>

<script>
export default {
  name: 'Tema7',
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
.tabs-a__tab
  background-color: #E8E8E8
.tarjeta.color-acento-botones
  background-color: #E6E2EE
</style>
