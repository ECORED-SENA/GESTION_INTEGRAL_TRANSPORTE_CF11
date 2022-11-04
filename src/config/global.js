export default {
  global: {
    componenteFormativo: 'Indicadores de recursos',
    descripcionCurso:
      'En este componente, el estudiante logrará conocer los diferentes procesos que permiten que el transporte de personas o artículos pueda realizarse desde un punto de origen hasta un destino, garantizando entrega y recibo correctos, lo que favorece la correcta prestación del servicio y la satisfacción del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión del transporte (despacho y recibo)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Modo aéreo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modo marítimo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modo férreo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Modo terrestre',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso de recepción ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características del producto a transportar',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Preparación de la mercancía para el transporte',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Validación de recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Recursos humanos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Equipos ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Recursos económicos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Informes de gestión',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Indicadores de productividad ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Rendimiento',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Criterios de calidad para el servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Cumplimiento (recorridos, horarios, frecuencias)',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Trazabilidad y seguridad (GPS, central de monitoreo) ',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo:
              'Recibo de la carga por parte del cliente - entrega por parte del transportador',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Matriz de producto o servicio no conforme (PQRS)',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castro, P. (2020). Proceso logístico de recibo de mercancías empresa grupo Algrano. Universidad Piloto de Colombia.',
    },
    {
      referencia:
        'Decreto 1609 de 2002. [Ministerio de Transporte]. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Julio 31 de 2002. ',
      link:
        'https://www.minambiente.gov.co/images/BosquesBiodiversidadyServiciosEcosistemicos/pdf/Normativa/Decretos/dec_1609_310702.pdf',
    },
    {
      referencia:
        'Estupiñán, J. y Reyes, M. (2019). Modo férreo, una alternativa de movilización de carga y pasajeros para el mejoramiento de la infraestructura y movilidad de las vías vehiculares. Universidad Francisco José de Caldas.',
    },
    {
      referencia:
        'Fondo de Prevención Vial. (2008). Transporte de Mercancías peligrosas en vehículos automotores de carga. ',
    },

    {
      referencia:
        'Ley 222 de 1995. Por la cual se modifica el Libro II del Código de Comercio, se expide un nuevo régimen de procesos concursales y se dictan otras disposiciones. Diciembre 20 de 1995. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0222_1995.html ',
    },
    {
      referencia:
        'Naciones Unidas. (2011). Recomendaciones relativas al transporte de mercancías peligrosas. Reglamentación modelo.',
      link:
        'https://unece.org/fileadmin/DAM/trans/danger/publi/unrec/rev17/Spanish/Rev17_Volume1.pdf ',
    },
    {
      referencia:
        'Organización de Aviación Civil Internacional [OACI] y Organización Mundial de Aduanas [OMA]. (s. f.). El transporte internacional de la carga aérea. Cadena de suministro segura para la carga aérea y el correo y directrices en materia de facilitación. ',
      link:
        'https://www.icao.int/Security/aircargo/Moving%20Air%20Cargo%20Globally/ICAO_WCO_Moving_Air_Cargo_es.pdf ',
    },
    {
      referencia:
        'Ruibal, A. (1994). Gestión Logística de la Distribución Física Internacional. Norma. ',
    },
    {
      referencia:
        'Salazar, D. (2005). Indicadores para la logística de transporte y distribución base para un estudio de Benchmarking. Universidad de los Andes. ',
      link: 'http://hdl.handle.net/1992/10638 ',
    },
  ],
  glosario: [
    {
      termino: 'Arrume',
      significado: 'montón, acumulación de cosas o abundancia de ellas. ',
    },
    {
      termino: 'Arrume negro',
      significado:
        'es el almacenamiento de productos desde el piso. Se utiliza cuando se dificulta el almacenamiento en estanterías y el producto lo permite por sus características.',
    },
    {
      termino: 'Buque',
      significado:
        'es un navío de gran tamaño para navegación marítima (a diferencia del barco, que es para navegación costera y fluvial). Cumple una función específica (buque de guerra, buque hospital, buque mercante, buque de transporte, etc.).',
    },
    {
      termino: 'Explosivo',
      significado:
        'es aquella sustancia que, por alguna causa externa (roce, calor, percusión, etc.), se transforma en gases, liberando calor, presión o radiación, en un tiempo muy breve.',
    },
    {
      termino: 'Inflamable',
      significado:
        'corresponde con aquello que puede encenderse de manera sencilla y que no tarda en desprender llamas.',
    },
    {
      termino: 'Diseña',
      significado:
        'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
    },
    {
      termino: '<i>Pallet</i>',
      significado:
        'es un dispositivo sobre cuya tarima puede agruparse determinada cantidad de mercancías, con el fin de construir una unidad de transferencia, transporte o arrume, con la ayuda de elementos mecanizados.',
    },
  ],
  complementario: [
    {
      tema:
        'El transporte internacional de la carga aérea. Cadena de suministro segura para la carga aérea y el correo y directrices en materia de facilitación.',
      referencia:
        'Organización de Aviación Civil Internacional [OACI] y Organización Mundial de Aduanas [OMA]. (s. f.).',
      tipo: 'Documento pdf',
      link:
        'https://www.icao.int/Security/aircargo/Moving%20Air%20Cargo%20Globally/ICAO_WCO_Moving_Air_Cargo_es.pdf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edwin Humberto Jiménez Gómez',
        cargo: 'Experto temático',
        centro:
          'Centro de Electricidad, Electrónica y Telecomunicaciones.Regional distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica ',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Paola Moya Peralta ',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Marcela Alarcon Granados'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Daniel Polanco'],
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Mutis',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Eulises Orduz',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Eulises Orduz',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yeimmy Bibiana Barrera Maldonado',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de Gestión de Repositorio',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
