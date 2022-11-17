<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Criterios de calidad para el servicio
    img(src='@/assets/curso/tema6/img1.jpg', alt='Texto que describa la imagen')
    p.mt-4 Para determinar la calidad entregada antes, durante y posterior al servicio, se deben definir y medir criterios como:
    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1   Cumplimiento (recorridos, horarios, frecuencias)
    p Para el cumplimiento del servicio, posterior a la determinación de los recursos humanos, técnicos y económicos, es necesario establecer un cronograma que incluya distancia, tiempos, rutas y frecuencias de prestación:
    .row.mb-5.justify-content-center
      .col-lg-4.mb-3.col-8
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema6/1.jpg' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.text-center.fa Recorrido

            p Se debe establecer la ruta en la cual se realizará el servicio, para lo cual deben verificarse aspectos como: distancia, disponibilidad de infraestructura, condiciones climáticas, disponibilidad de recursos en la base, condiciones de tráfico, riesgos de seguridad, escalas, etc.
      .col-lg-4.mb-3.col-8
        .tarjetas-up
          img.mb-3(src='@/assets/curso/tema6/2.jpg' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.fa Horarios

            
            p De acuerdo con el tipo de equipo de transporte seleccionado, se deben coordinar los tiempos para la prestación del servicio, junto con los correspondientes pasos por puntos intermedios y las posibilidades de ascenso y descenso de pasajeros, de transbordo, de consolidación de carga, etc.
      .col-lg-4.mb-3.col-8
        .tarjetas-up
          img.mb-2(src='@/assets/curso/tema6/3.jpg' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.fa Frecuencias

              
            p Este concepto depende de la capacidad instalada (cantidad de equipos) y recursos para la operación, luego de lo cual se deben realizar estudios que permitan identificar la necesidad del servicio y lograr determinar con ello la periodicidad de la prestación del servicio, es decir, que exista demanda que posibilite la rentabilidad.
    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2   Trazabilidad y seguridad (GPS, central de monitoreo)
    p En transporte, se conoce como trazabilidad al seguimiento de los vehículos utilizados, permitiendo con esto la ubicación en tiempo real o aproximado, facilitando la comunicación bidireccional con las personas que dirigen el vehículo y buscando la seguridad de la carga, el vehículo y el recurso humano.  Esta información facilita la reacción oportuna ante las contingencias. Entre estas opciones tenemos: 
    .row.mb-5.justify-content-center
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/4.png' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              p <strong>Avión:</strong> para su localización y seguimiento, es usado el radar (frecuencias de radio) y el <i>GPS (Global Positioning System</i> o Sistema de Posicionamiento Global), que funciona por medio de señal satelital. Recientemente, los aviones son ubicados por satélite y se envían datos a tierra mediante el sistema ADS-B (<i>Automatic Dependent Surveillance Broadcast</i>). 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/5.png' alt='AvatarTop')

          .tarjeta.color-secundario
            .p-4
              p <strong>Barco:</strong> en estos equipos, el sistema más utilizado es el <i>GPS</i>, mediante el cual, además de la localización, se facilita la navegación, la velocidad, se proporciona seguridad y eficiencia a los viajes.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/6.png' alt='AvatarTop')

          .tarjeta.color-secundario
            .p-4
              p <strong>Vehículos:</strong> para los vehículos en tierra, se presentan dos tecnologías principales y que varían de la cobertura de la señal y el costo del servicio de ubicación:
              ul.fa-ul
                li 
                  i.fa-li.fas.fa-angle-right.ca
                  | GPS: #[em Global Positioning System]
                li.mt-3 
                  i.fa-li.fas.fa-angle-right.ca
                  |  #[em General Packet Radio Service] (Servicio General de Paquetes vía Radio). Este sistema tiene la capacidad de transmitir paquetes de datos multimedia a mayor velocidad y a través de la infraestructura móvil para teléfonos celulares.

    separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3   Recibo de la carga por parte del cliente - entrega por parte del transportador  
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/7.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Durante este proceso, la mercancía es ubicada dentro de las instalaciones del cliente, sitio en el cual se procede a revisar, validar y decidir si se almacenan o continúan su traslado hacia otro destino.  Se identifican las no conformidades con el producto, se verifican las especificaciones contractuales, en cuanto a cantidad, calidad, tiempo de entrega y verificación documental.


</template>

<script>
export default {
  name: 'Tema6',
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
.tarjetas-up
  overflow: hidden
  border-radius: 10px
  position: relative
  &_card
    transition: bottom .3s ease-in-out
    position: absolute
    border-radius: 10px
    width: 100%
    height: 100%
    left: 0
    bottom: -75%
    i:last-child
      display: none
  &:hover
    .tarjetas-up_card
      bottom: -12%
    i:first-child
      display: none
    i:last-child
      display: block
.tarjeta.color-secundario
  background-color: #FAE7CF
</style>
