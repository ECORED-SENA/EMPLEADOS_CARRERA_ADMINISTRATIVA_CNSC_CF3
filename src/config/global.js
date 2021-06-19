export default {
  global: {
    componenteFormativo:
      'Fases del proceso de evaluación del desempeño laboral',
    descripcionCurso:
      'El Acuerdo 6176 de 2018, expedido por la Comisión Nacional del Servicio Civil - CNSC, establece cuatro fases para llevar a cabo el proceso de evaluación del desempeño de los empleados de carrera administrativa y en periodo de prueba.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-play-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fases del proceso de evaluación del desempeño laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'fas fa-file-alt',
            numero: '1.1',
            titulo: 'Fase I Concertación de compromisos laborales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Fase II Seguimiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Fase III Evaluaciones parciales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Fase IV Calificación definitiva',
            hash: 't_1_4',
          },
        ],
      },
    ],
    subMenu: [
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Fanny Restrepo Morales',
        cargo: 'Instructora Experta temática',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Risaralda',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
      },
      {
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: ['Carlos Julián Ramírez Benítez'],
        cargo: 'Diseño web',
      },
      {
        nombre: [],
        cargo: 'Producción Audiovisual',
      },
      {
        nombre: ['Luis Jesús Pérez Madariaga'],
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Yenny patricia ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acuerdo 6176 de 2018, por el cual se establece el Sistema Tipo de Evaluación del Desempeño Laboral de los Empleados Públicos de Carrera Administrativa y en Período de Prueba. Bogotá, D.C., 10 de octubre de 2018.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90685',
    },
    {
      referencia:
        'Anexo Técnico del Sistema Tipo de Evaluación del Desempeño. Bogotá, D.C., 10 de octubre de 2018.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90685',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). (Capítulo 2: De la Función pública Art. 122, 123, 125,130) República de Colombia.',
      link: '',
    },
    {
      referencia:
        'Curso para evaluadores del desempeño laboral con el sistema tipo de la Comisión Nacional del Servicio Civil. Material de formación, componentes formativos 2 y 3 SENA.',
      link: '',
    },
    {
      referencia:
        'Decreto 1227 de 2005 Por el cual se reglamenta parcialmente la Ley 909 de 2004 y el Decreto Ley 1567 de 1998. Capítulo IV. (2005, 25 de abril). Bogotá, D.C., 21 de abril de 2005.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16313',
    },
    {
      referencia:
        'Decreto Ley 760 de 2005 Por el cual se establece el procedimiento que debe surtirse ante y por la Comisión Nacional del Servicio Civil para el cumplimiento de sus funciones. (Título VII Procedimiento para la notificación de la calificación de los empleados de carrera (Art.33 al 40). Bogotá, D. C., 17 de marzo de 2005.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16124',
    },
    {
      referencia:
        'Decreto 1083 de 2015 Por medio del cual se expide el Decreto Único Reglamentario del Sector de Función Pública. (Título 8 Evaluación del Desempeño y calificación de servicios. Capítulo 1: Evaluación del desempeño laboral Capítulo 2: Evaluación y calificación del período de prueba). Bogotá, D.C., 26 de mayo de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62866',
    },
    {
      referencia:
        'Decreto 815 de 2018 Por el cual se modifica el Decreto 1 083 de 2015, Único Reglamentario del Sector de Función Pública, en lo relacionado con las competencias laborales generales para los empleos públicos de los distintos niveles jerárquicos. Bogotá, D.C 8 de mayo de 2018.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=86304',
    },
    {
      referencia:
        'Ley 909 de 2004 Por la cual se expiden normas que regulan el empleo público, la carrera administrativa, gerencia pública y se dictan otras disposiciones. Bogotá, D. C., 23 de septiembre de 2004.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0909_2004.html',
    },
  ],
  glosario: [
    {
      termino: 'Calificación',
      significado:
        'La calificación corresponde a la asignación del porcentaje alcanzado por el evaluado, conforme a las evidencias que dan cuenta de su desempeño y comportamiento.',
    },
    {
      termino: 'Calificación del periodo de prueba',
      significado:
        'Es aquella que resulta de evaluar el desempeño laboral del empleado vinculado mediante un proceso de selección, al cumplir el término de duración del período de prueba, el cual se cuenta a partir de la inducción en el puesto de trabajo.',
    },
    {
      termino: 'Carrera administrativa',
      significado:
        'Sistema que regula el ingreso, permanencia, ascenso y retiro del personal, regulado por la función pública y la Comisión Nacional del Servicio Civil.',
    },
    {
      termino: 'Comisión Nacional del Servicio Civil – CNSC',
      significado:
        'La Comisión Nacional del Servicio Civil CNSC es un órgano autónomo e independiente, del más alto nivel en la estructura del Estado colombiano, con personería jurídica, autonomía administrativa, patrimonial y técnica, y no hace parte de ninguna de las ramas del poder público. Según el artículo 130 de la Constitución Política, es "responsable de la administración y vigilancia de las carreras de los servidores públicos, excepción hecha de las que tengan carácter especial".',
    },
    {
      termino: 'Competencias',
      significado:
        'Es la capacidad de una persona para desempeñar, en diferentes contextos y con base en los requerimientos de calidad y resultados esperados en el sector público, las funciones inherentes a un empleo; capacidad que está determinada por los conocimientos, destrezas, habilidades, valores, actitudes y aptitudes que debe poseer y demostrar el empleado. (ESAP-DAFP – Guía para la formulación del PIC).',
    },
    {
      termino: 'Compromisos laborales',
      significado:
        'Son aquellos que evidencian las competencias funcionales del empleo y las competencias comportamentales que debe acreditar todo servidor público en el ejercicio del empleo.',
    },
    {
      termino: 'Desempeño',
      significado:
        'Conductas laborales del empleado en el cumplimiento de sus funciones. El desempeño se considera también como el desarrollo de los compromisos con relación a las metas deseadas por la entidad. ',
    },
    {
      termino: 'Empleo público',
      significado:
        'Es el conjunto de funciones, tareas y responsabilidades que se asignan a una persona y las competencias requeridas para llevarlas a cabo, con el propósito de satisfacer el cumplimiento de los planes de desarrollo y los fines del estado. (artículo 19 Ley 909 de 2004).',
    },
    {
      termino: 'Evaluación',
      significado:
        'La evaluación consiste en estimar de forma permanente los conocimientos, destrezas, actitudes, habilidades, aptitudes y rendimiento de los evaluados durante el período respectivo.',
    },
    {
      termino: 'Evaluación no satisfactoria',
      significado:
        'Es aquella que no alcanza el mínimo establecido como satisfactorio dentro de la escala vigente. Una vez en firme conlleva a la declaración de insubsistencia del nombramiento del empleado.',
    },
    {
      termino: 'Evaluado',
      significado:
        'Empleado de carrera o en período de prueba que presta sus servicios en una entidad cuyo sistema de carrera administrativa se encuentre administrado y vigilado por la CNSC.',
    },
    {
      termino: 'Evaluador',
      significado:
        'Es el jefe inmediato del servidor de carrera o en período de prueba, responsable de evaluar su desempeño, quien deberá ostentar un grado igual o superior al evaluado.',
    },
    {
      termino: 'Evidencias',
      significado:
        'Son los elementos que permiten establecer de manera objetiva, equitativa y transparente el avance, cumplimiento o, incumplimiento de los compromisos que se han generado durante el período de evaluación.',
    },
    {
      termino: 'Función pública',
      significado:
        'Aquella que está al servicio de los intereses generales y prestación de servicios a cargo del Estado, a través de sus servidores, y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad (artículo 209 Constitución Política y 2° Ley 909 de 2004).',
    },
    {
      termino: 'Impedimentos',
      significado:
        'Corresponden a causales de orden legal que imposibilitan el desempeño de una función; buscan garantizar el principio de la imparcialidad y el debido proceso. Para el caso de la evaluación del desempeño laboral, los responsables de evaluar deberán declararse impedidos cuando se encuentren vinculados con estos por matrimonio o por unión permanente o tengan parentesco hasta el cuarto grado de consanguinidad, segundo de afinidad, primero civil o exista enemistad grave con el empleado a evaluar o cuando exista cualquier causal de impedimento o hecho que afecte su objetividad.',
    },
    {
      termino: 'Metas institucionales',
      significado:
        'Para los fines de la evaluación del desempeño, las metas institucionales son las establecidas por la alta dirección de la entidad, de conformidad con los planes, programas, proyectos, o planes operativos anuales por área o dependencia, encaminada al cumplimiento de los objetivos y propósitos de la entidad.',
    },
    {
      termino: 'Periodo de prueba en empleo de carrera',
      significado:
        'El empleado con derechos de carrera administrativa que supere un concurso para un empleo de carrera será nombrado en período de prueba y su empleo se declarará vacante temporal mientras dura el período de prueba.',
    },
    {
      termino: 'Recursos',
      significado:
        'Mecanismos establecidos por la ley para lograr la revisión de una decisión y su eventual modificación cuando se considere que se produjo con violación de las normas legales o reglamentarias que la regulan; para el caso de la evaluación del desempeño solo proceden frente a la calificación definitiva expresa o presunta, cuando el evaluado no está de acuerdo con esta, podrá interponerlos personalmente ante el evaluador por escrito y sustentados en la diligencia de notificación personal o dentro de los cinco (5) días siguientes a la notificación de la evaluación. Los recursos que pueden interponerse son: el de reposición, ante el evaluador o ante la comisión evaluadora en los casos en que actúe esta y el de apelación, ante el superior jerárquico del evaluador. En todo caso, en el trámite y decisión de los recursos, se aplicará lo dispuesto en el Código de Procedimiento administrativo y de lo contencioso administrativo.',
    },
    {
      termino: 'Recusación',
      significado:
        'Se presenta cuando el empleado al ser evaluado advierta una causal de impedimento de las ya mencionadas, por lo que inmediatamente lo manifestará por escrito al jefe de la entidad, quien, mediante acto administrativo motivado, decidirá sobre el impedimento dentro de los cinco días siguientes. De aceptarla, se designará otro evaluador y en el mismo acto se ordenará la entrega de los documentos que hasta la fecha obren sobre el desempeño laboral del empleado a evaluar.',
    },
    {
      termino: 'Terceros',
      significado:
        'Son aquellos que aporten información verificable que sirva como evidencia del desempeño laboral y comportamiento del evaluado.',
    },
  ],
  complementario: [
    {
      texto:
        'Acuerdo 6176 de 2018 Por el cual se establece el Sistema tipo de evaluación del desempeño laboral de los Empleados Públicos de Carrera Administrativa y en Período de Prueba. Bogotá, D.C., 10 de octubre de 2018.',
      tipo: 'Acuerdo',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90685',
    },
    {
      texto:
        'Anexo técnico del Sistema tipo de evaluación del desempeño. Bogotá, D.C., 10 de octubre de 2018.',
      tipo: 'Anexo del Acuerdo 6176/18',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90685',
    },
  ],
}
