<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Validación de recursos
    p A continuación, se evidencia cuáles son los recursos que deben ser validados: 
    img(src='@/assets/curso/tema3/img1.jpg', alt='Texto que describa la imagen')
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1   Recursos humanos
    p El área correspondiente al interior de las empresas de transporte debe validar la idoneidad del personal asignado, con el fin de encontrar el recurso humano que dirija los equipos asignados durante el transporte. Estos roles son:
    .row.justify-content-center
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="14%" y="49%" numero="1")
            .h5.mb-2 Piloto de avión

            p Debe realizar un curso de formación en una escuela certificada para obtener la licencia de piloto privado. Posteriormente, se hacen exámenes teórico- prácticos, de idoneidad física y mental y de aprobación, para obtener licencia de piloto comercial.

          .tarjeta.color-acento-botones.p-3(x="10%" y="96%" numero="2")
            .h5.mb-2 Capitán de barco
            p Requiere formación de inicio en las fuerzas armadas, pasando por varios niveles de práctica y experiencia.

          .tarjeta.color-acento-botones.p-3(x="44%" y="10%" numero="3")
            .h5.mb-2 Operario de tren
            p Requiere una prueba de selección que verifique la capacidad para trabajar con altos niveles de rutina e incluso monotonía, además de tener capacidades de comunicación, mantenimiento y criterio de decisión.
          .tarjeta.color-acento-botones.p-3(x="42%" y="70%" numero="5")
            .h5.mb-2 Ayudante de conductor 
            p Persona que apoya las labores de cargue y descargue en el vehículo y cuyas funciones se encaminan a la acomodación de las mercancías dentro del vehículo, descarga, entrega al cliente, limpieza y organización del vehículo. 
          .tarjeta.color-acento-botones.p-3(x="60%" y="10%" numero="7")
            .h5.mb-2 Ayudante de bodega
            p Es la persona que está encargada de operar este tipo de vehículo de apoyo al cargue y descargue. Dentro de sus funciones está el traslado del lugar de almacenamiento al camión, y viceversa, de la mercancía ubicada en <i>pallets</i>, ubicándola de manera organizada y eficiente; además de ser responsable por el cuidado y mantenimiento de su equipo de trabajo.
          .tarjeta.color-acento-botones.p-3(x="85%" y="92%" numero="4")
            .h5.mb-2 Conductor de vehículo
            p Debe realizar un curso de conducción de acuerdo con el tipo de vehículo a operar para obtener licencia. Posteriormente, debe realizar otros cursos y capacitaciones, generalmente exigidas mediante requisitos contractuales y/o legales.
          .tarjeta.color-acento-botones.p-3(x="88%" y="72%" numero="6")
            .h5.mb-2 Operador de montacarga
            p Es la persona que está encargada de operar este tipo de vehículo de apoyo al cargue y descargue. Dentro de sus funciones está el traslado del lugar de almacenamiento al camión, y viceversa, de la mercancía ubicada en <i>pallets</i>, ubicándola de manera organizada y eficiente; además de ser responsable por el cuidado y mantenimiento de su equipo de trabajo. 
    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2   Equipos                                                  
    p Sea cual fuere el modo utilizado, se hará necesario determinar el equipo de transporte correcto, dependiendo de las condiciones contractuales:
    ol.lista-ol--cuadro.mt-4
      li 
        .lista-ol--cuadro__vineta
          span 
        | <strong>Modo marítimo</strong>
    p El transporte por vía acuática presenta, dentro de sus ventajas, la capacidad, costo, flexibilidad en el tipo de carga, pero también dificultades como la baja velocidad, accesibilidad, altos costos de embalaje y las demoras en trámites. Para este modo de transporte, se tienen diversas posibilidades, que varían de acuerdo con el tipo de carga o pasajeros, el peso, tamaño, finalidad de viaje, etc., encontrando:
    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.col-8
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/img3.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.fa Buque de pasajeros
            
            p Más conocido como crucero.  Buques portacontenedores: para ubicación y traslado de contenedores.
      .col-lg-3.mb-3.col-8
        .tarjetas-up
          img(src='@/assets/curso/tema3/img4.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.fa Buques graneleros
            
            p Diseñados para el transporte de carga suelta sólida o líquida.
      .col-lg-3.mb-3.col-8
        .tarjetas-up
          img(src='@/assets/curso/tema3/img5.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.fa Buques mixtos
              
            p Pueden movilizar diferentes tipos de carga.
      .col-lg-3.mb-3.col-8
        .tarjetas-up
          img(src='@/assets/curso/tema3/img6.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.fa Buques de carga refrigerada
              
            p Especiales para mantener las condiciones de los productos ante temas de temperatura.
    ol.lista-ol--cuadro.mt-4
      li 
        .lista-ol--cuadro__vineta
          span 
        | <strong>Modo aéreo</strong>
    p Cuenta con ventajas relativas a la velocidad y la cobertura. Como desventajas, se identifican la capacidad, la dificultad para movilizar cargas peligrosas y productos de bajo costo unitario. Se emplea el avión ya sea para carga, pasajeros o mixtos; debe seleccionarse  y asignarse de acuerdo con la cantidad, el peso, tamaño y autonomía de vuelo (distancias cortas, medias y largas); principalmente se encuentran:
    .row.mt-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img7.png' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-5
              h5 Propulsión a motor:
              p Existen diferentes tipos de acuerdo con el número de motores para su propulsión.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img8.png' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-5
              h5 Helicóptero:
              p De sustentación y propulsión por rotores horizontales.
              .row.mb-4
    ol.lista-ol--cuadro.mt-4
      li 
        .lista-ol--cuadro__vineta
          span 
        | <strong>Modo férreo:</strong>
    p Este modo presenta facilidades por capacidad y velocidad; desafortunadamente, es poco flexible, accesible y de limitaciones para el trasbordo. En este modo, se emplea el tren como equipo, y se encuentran los siguientes tipos:
    .row.mt-4
      .col-lg-6
        img.mb-4(src='@/assets/curso/tema3/img9.png' alt='AvatarTop')
      .col-lg-6
        .col-sm
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check
              p.mb-0 <strong>Equipo de tracción:</strong> genera la potencia y es más conocido como locomotora, la cual arrastra los vagones.
            
            li 
              i.fas.fa-check
              p.mb-0 <strong>Vagones para pasajeros:</strong> especialmente diseñados,  ya sea para viajes cortos, con solamente sillas, o viajes largos, en los cuales se encuentran incluso camarotes para descanso.
            li 
              i.fas.fa-check
              p.mb-0 <strong>Vagón tipo tanque:</strong> se utiliza para el transporte de carga granel, embalada o refrigerada, y se presentan con diferentes características según su forma de cargue y descargue.
            li 
              i.fas.fa-check
              p.mb-0 <strong>Vagón plataforma:</strong>  también utilizado para carga, sin recubrimientos lateral o superior, y asegura la carga  con amarres.
    ol.lista-ol--cuadro.mt-4
      li 
        .lista-ol--cuadro__vineta
          span 
        | <strong>Modo terrestre: </strong>
    p Corresponde a aquel para el cual el movimiento sobre la superficie terrestre permite la movilización. Dentro de sus ventajas se tienen la accesibilidad, la flexibilidad y la rapidez. Sus desventajas son la capacidad, la congestión, la accidentabilidad y las regulaciones de tráfico. Para el transporte por tierra, se encuentran:
    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.col-8
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/img10.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.fa Camionetas
            
            p Vehículos utilizados para cargas máximas de una tonelada o con disposición de asientos entre 6 y 15 pasajeros.
      .col-lg-3.mb-3.col-8
        .tarjetas-up
          img(src='@/assets/curso/tema3/img11.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.fa Bus
              
            p Vehículos destinados al transporte de pasajeros.
      .col-lg-3.mb-3.col-8
        .tarjetas-up
          img(src='@/assets/curso/tema3/img12.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4.mb-0
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.fa Camión
              
            p  Equipo para transporte de carga.  La legislación en Colombia permite el transporte de máximo 35 toneladas netas de carga y un consolidado con el peso bruto vehicular de 53 toneladas. Se presentan en tipos rígidos y articulados, ambos de diferentes capacidades de carga.
      .col-lg-3.mb-3.col-8
        .tarjetas-up
          img(src='@/assets/curso/tema3/img13.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.fa Equipos especiales
              
            p Corresponde con aquellos equipos utilizados para transporte de cargas extrapesadas y extradimensionadas, los cuales requieren permisos especiales o equipos para izaje (grúas), es decir, para la ubicación de cargas en el vehículo o fuera de él.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3	Recursos económicos  
    p El proceso de entrega del producto genera gastos relacionados con el transporte, los impuestos aduaneros, costos de personal y logística requerida para recepción y despacho.
    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-5
            img(src='@/assets/curso/tema3/img14.png' alt='AvatarTop' )
          .col-lg-7
            .row.b1.p-4
              p.mt-4.mb-4 En el comercio internacional, los costos asociados se acuerdan en documento legal, previo acuerdo y selección de Incoterms adecuados.      
    .row.mt-4
      .col-lg-6
        img(src='@/assets/curso/tema3/img15.png' alt='AvatarTop' )
      .col-lg-6
        p.mt-4 Por otra parte, en los acuerdos contractuales establecidos, se pueden establecer multas correspondientes a las demoras en la entrega de la mercancía.
        p En el transporte de hidrocarburos en Colombia, el recorrido tiene un tiempo máximo establecido que se fija en documento y cuya identificación es conocida como “vigencia”. Luego de sobrepasar dicho tiempo sin que la entrega se realice, el producto puede ser confiscado, los clientes pueden generar multas y el vehículo-conductor puede tener tiempos de inactividad que finalmente repercuten en los ingresos asociados a la productividad de su operación.
    p.mt-5 <strong>Mejora de los costos del servicio:</strong> existen alternativas tendientes a la reducción de los costos de recibo y entrega dentro de los diferentes procesos, dentro de los cuales se encuentran aspectos como:
    .row.mt-5
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Transporte")
            .col-lg-11
              p Acá se inicia la evaluación de costos, ya que un correcto sondeo de mercado puede ayudarnos a definir la mejor tarifa beneficio – costo. 

          .row.justify-content-center(titulo="Embalaje")
            .col-lg-11
              p Durante este proceso, los costos pueden reducirse si se consideran los materiales utilizados, los cuales deben minimizar las afectaciones a la mercancía sin perjudicar el costo y generando economías de escala que busquen mejores precios en los mismos. En los equipos utilizados, igualmente existe posibilidad de reducir los costos, verificando la necesidad y optimización de los recursos utilizados. Finalmente, con la mano de obra, igualmente el costo puede disminuirse mediante la optimización del personal, los cronogramas de trabajo y las funciones específicas asignadas.
          .row.justify-content-center(titulo="Entrega")
            .col-lg-11
              p Permite la observancia de los costos, con el objetivo de la minimización, ya sea por costos de transporte, mano de obra, intermediaciones, documentación, entre otros. 
          .row.justify-content-center(titulo="Entrega - relación costo – daño: ")
            .col-lg-11
              p Es la máxima aceptación de diferencias unitarias o volumétricas dentro del servicio, ya que, en gran parte de los contratos de transporte, se cuenta con una tolerancia respecto a daños y pérdidas, la que permite reducir los impactos económicos a la transportadora. Dentro de los daños más comunes y negociables con el cliente se pueden encontrar: deterioros del embalaje, exposición del producto, sellos de seguridad rotos, perecederos fuera de la temperatura deseada, etc.
      .col-lg-6
        img(src='@/assets/curso/tema3/img16.png' alt='AvatarTop' )
    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4	Informes de gestión  
    .row.bg1 
      .col-lg-6
        p A través de este documento, una empresa está en la obligación de mostrar el desempeño de sus diferentes áreas de proceso, identificando las particularidades, el desarrollo de sus actividades, el rendimiento y los resultados. Para este caso, el informe de gestión corresponderá al servicio de transporte, lo cual incluye lo correspondiente a los procesos de cargue y descargue.
        p En Colombia, los responsables de las empresas deben elaborar y presentar, con carácter obligatorio, según la Ley 222 de 1995, un informe de gestión. El informe de gestión, dentro de su componente de transporte, puede incluir:
      .col-lg-6
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check
            p.mb-0 <strong>Identificación de área:</strong>  para este caso, será la correspondiente a la recepción, transporte y entrega.
          li 
            i.fas.fa-check
            p.mb-0 <strong>Contenido del informe:</strong>  descripción:
          li 
            i.fas.fa-check
            p.mb-0 <strong>Desarrollo:</strong>   en el cual se presentará la situación (acuerdo contractual), servicio (contrato de transporte) y soluciones (metodología para el desarrollo del servicio).
          li 
            i.fas.fa-check
            p.mb-0 <strong>Resultados:</strong>   tabulación, análisis, conclusiones del servicio.
    img(src='@/assets/curso/tema3/img17.jpg', alt='Texto que describa la imagen')
                                
</template>

<script>
export default {
  name: 'Tema3',
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
.tarjeta.color-acento-botones
  background-color: #F3F9FF
.tarjeta.color-secundario
  background-color: #FAE7CF
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: solid 2px #FF6D4B
.acordion__accion__btn--a
  background-color: #5B4794
.acordion__accion__btn--a i, .acordion__accion__btn--b i
  color: white
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul.acordion__activo
  background-color: #F2F0F7!important
</style>
