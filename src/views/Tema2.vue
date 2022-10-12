<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso de recepción    
    p Con el fin de dar inicio al proceso de transporte, se hace necesario que la empresa de transporte realice la recepción de las mercancías a trasladar; para ello, se deben determinar las características del producto a exportar y la preparación de la mercancía para el transporte.
    img(src='@/assets/curso/tema2/img1.jpg', alt='Texto que describa la imagen')
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1   Características del producto a transportar
    p Durante este proceso, es necesario evidenciar el tipo de mercancía a transportar:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xCAYdoboBLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2   Preparación de la mercancía para el transporte
    p Este proceso lo puede realizar el cliente antes de entregarlo para el transporte, o lo puede realizar el transportista una vez acordado el contrato de transporte, según los siguientes procedimientos:
    .row.justify-content-center
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Embalaje")
            .col-lg-11
              p.mb-0 Considerando que la carga debe protegerse del origen al destino, en el transporte internacional pueden ser dos o más los modos utilizados y, por consiguiente, varios procesos de manipulación durante el trayecto; por eso es necesario el embalaje que protege el producto de aspectos como daños por caída, golpe, vibración, clima, temperatura, animales, saqueo, etc.
              p  Este proceso facilita la manipulación de la carga, ya sea manual o por intermedio de equipos especializados, el almacenamiento, la ubicación en <i>pallets</i> (por ejemplo, cajas sobre <i>pallet</i>), la ubicación dentro de contenedores o la determinación de fletes y seguros.
              p Para realizar el embalaje de las mercancías, puede ser viable utilizar madera, cartón, papel, plástico, material sintético o metales, y puede ajustarse, según la forma, en cajas, latas, barriles, sacos, carretes, costales o contenedores.
          .row.justify-content-center(titulo="Marcación")
            .col-lg-11
              p Este proceso permite identificar y/o localizar cada pieza de la carga individual o unitarizada. Para realizar la marcación, debe considerarse que la misma sea legible, no borrable, localizable, cumplir con la normatividad vigente y tener la información suficiente, es decir, información estándar del producto. Adicionalmente, puede marcarse con otra información, como peso o licencias y con los datos respecto a la forma de manipulación.
          .row.justify-content-center(titulo="Unitarización")
            .col-lg-11
              p Luego de embalar la carga, es posible que se necesite unitarizarla, es decir, llevar todas la cajas, bultos, barriles, etc., sobre un <i>pallet</i>, o introducirlos a un contenedor, o incluso introducir los <i>pallets</i> dentro del contenedor. Este último elemento cuenta con varios tipos, los cuales dependen de las características de la carga a transportar, entre ellos están: contenedor de carga seca, contenedor para carga líquida (cisterna), contenedor para carga a granel, contenedor de techo abierto, contenedor refrigerado, etc. 
          .row.justify-content-center(titulo="Planilla de despacho")
            .col-lg-11
              p Con este documento, los vehículos que prestan servicios de transporte de pasajeros por carretera preparan información correspondiente a rutas y horarios. 
          .row.justify-content-center(titulo="Ascenso al vehículo")
            .col-lg-11
              p Independientemente del medio utilizado (autobús, avión, barco), se debe verificar el número de asiento asignado en el tiquete de viaje y dirigirse al lugar asignado. Adicionalmente, si se lleva equipaje de mano, deben utilizarse los espacios asignados para su ubicación, sin abusar de los mismos.


      .col-lg-6
        img(src='@/assets/curso/tema2/img2.jpg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
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
  background-color: #E3DEEF!important
.acordion__accion__btn--a
  background-color: #5B4794
.acordion__accion__btn--a i, .acordion__accion__btn--b i
  color: white
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul.acordion__activo
  background-color: #F2F0F7!important
</style>
