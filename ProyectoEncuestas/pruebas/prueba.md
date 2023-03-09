{
    path: 'junta',
    children: [
      { path: '', component: JuntaComponent },
      {
        path: 'ejes', children: [
          { path: '', component: EjesComponent },
          { path: 'desactivados', component: EjesDesactivadosComponent }
        ]
      },
      {
        path: 'cargos', children: [
          { path: '', component: CargosComponent },
          { path: 'desactivados', component: CargosDesactivadosComponent }
        ]
      },

    ]
  },
  {
    path: 'org', children: [
      { path: '', component: OrganizacionComponent },
      {
        path: 'organizaciones', children: [
          { path: '', component: OrganizacionesComponent },
          { path: 'desactivados', component: OrganizacionesDesactivadosComponent }
        ]
      },
      {
        path: 'tipos', children: [
          { path: '', component: OrganizacionesTiposComponent },
          { path: 'desactivados', component: OrganizacionesTiposDesactivadosComponent }
        ]
      }
    ]
  },
  {
    path: 'servicios', children: [
      { path: '', component: ServiciosComponent },
      {
        path: 'basicos', children: [
          { path: '', component: BasicosComponent },
          { path: 'desactivados', component: BasicosDesactivadosComponent }
        ]
      },
      {
        path: 'locales', children: [
          { path: '', component: LocalesComponent },
          { path: 'desactivados', component: LocalesDesactivadosComponent }
        ]
      },
    ]
  },
  {
    path: 'rn', children: [
      { path: '', component: RecursosComponent },

      {
        path: 'bosques', children: [
          { path: '', component: BosquesComponent },
          { path: 'desactivados', component: BosquesDesactivadosComponent }
        ]
      },
      {
        path: 'suelos', children: [
          { path: '', component: TipoSueloComponent },
          { path: 'desactivados', component: TipoSueloDesactivadosComponent }
        ]
      },
    ]
  },
  {
    path: 'financiamientos', children: [
      { path: '', component: FinanciamientosComponent },
      {
        path: 'tipos', children: [
          { path: '', component: TiposFinanciamientosComponent },
          { path: 'desactivados', component: TiposFinanciamientosDesactivadosComponent }
        ]
      },
      {
        path: 'fuentes', children: [
          { path: '', component: FuentesFinanciamientosComponent },
          { path: 'desactivados', component: FuentesFinanciamientosDesactivadasComponent }
        ]
      },
    ]
  },
  {
    path: 'requerimientos', children: [
      { path: '', component: RequerimientosComponent },
      {
        path: 'mercados', children: [
          { path: '', component: MercadosComponent },
          { path: 'desactivados', component: MercadosDesactivadosComponent }
        ]
      },
      {
        path: 'tierras', children: [
          {
            path: 'usos', children: [
              { path: '', component: UsosTierrasComponent },
              { path: 'desactivados', component: UsosTierrasDesactivadosComponent }
            ]
          },
          {
            path: 'tenencia', children: [
              { path: '', component: TenenciaTierrasComponent },
              { path: 'desactivados', component: TenenciaTierrasDesactivadasComponent }
            ]
          }
        ]
      },
      {
        path: 'estructuras', children: [
          { path: '', component: EstructurasComponent },
          { path: 'desactivados', component: EstructurasDesactivadasComponent }
        ]
      },
    ]
  },