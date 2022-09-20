<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Indicadores de productividad
    p Corresponde a aquellas herramientas metodológicas que permiten verificar, analizar y evaluar el rendimiento de las empresas, y, en específico, de sus áreas involucradas, con el objetivo de mejorar los resultados de la gestión y minimizar los costos del proceso.
    p Los indicadores también son conocidos como KPI (Key Performance Indicators). La necesidad de medir la gestión ha desarrollado la premisa popular que indica: 
      span.bcc <strong>“Lo que no se mide no se controla”</strong>
      |, lo cual, al analizar, sin duda presenta justificación, ya que el mejoramiento depende de la información y los indicadores que permiten la constante actualización de los números de las compañías. 
    TabsA.color-acento-contenido.mb-5

      .tarjeta.color-acento-botones.p-4(titulo="Porcentaje de utilización")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema4/img1.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Porcentaje de utilización
            p Determinado por el peso/volumen/sillas del equipo utilizado dividido en la capacidad de este. Adicionalmente, es posible determinar la capacidad de compensación, es decir, el regreso cargado.
      
      .tarjeta.color-acento-botones.p-4(titulo="Porcentaje de utilización")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema4/img2.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Carga y descarga
            p Los contratos de transporte generalmente especifican los tiempos máximos utilizados y las condiciones mínimas para la recepción, movilización y entrega de las mercancías. Gracias a ello, se logra medir la efectividad del servicio, determinando la calidad y el nivel de satisfacción del cliente. Los indicadores utilizados pueden ser: porcentaje de devoluciones, de daños, robos, rendimiento de los equipos de cargue y descargue, uso de tecnología de la información, posibilidades de distribución, recibos y entregas.
      .tarjeta.color-acento-botones.p-4(titulo="Vehículos")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema4/img3.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Vehículos
            p En la medición de los indicadores de los equipos utilizados será viable observar: tiempos de espera en tránsito, cargue y descargue, costo de transporte por unidad de medida, costo de transporte por unidad de tiempo, costo de transporte por unidad de distancia, accidentalidad vial, número de fallas de mecánicas, número de reparaciones, consumo de combustible por distancia, consumo de insumos del vehículo por medida de tiempo o distancia, horas de vuelo, renovación de flota, etc.
      .tarjeta.color-acento-botones.p-4(titulo="Conductores")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema4/img4.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Conductores
            p Generalmente, en el recurso humano es viable determinar aspectos como: productividad frente a los ingresos, horas de trabajo, tiempo de descanso, cronograma de capacitaciones, etc.
      .tarjeta.color-acento-botones.p-4(titulo="Infraestructura")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema4/img5.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Infraestructura
            p Las condiciones de la infraestructura, independientemente del modo de uso, son susceptibles de medirse mediante sus condiciones, distancias, obstáculos, inversiones, etc.
                                
</template>

<script>
export default {
  name: 'Tema4',
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
