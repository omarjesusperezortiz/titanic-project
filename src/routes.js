import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Infographs
const Funnel = React.lazy(() => import('./views/infographics/Funnel'))
const Marimekko = React.lazy(() => import('./views/infographics/Marimekko'))
const Bars = React.lazy(() => import('./views/infographics/Bars'))
const Waffle = React.lazy(() => import('./views/infographics/Waffle'))
const Sunburst = React.lazy(() => import('./views/infographics/Sunburst'))
const More = React.lazy(() => import('./views/infographics/More'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/bars', name: 'Bars', element: Bars },
  { path: '/funnel', name: 'Funnel', element: Funnel },
  { path: '/marimekko', name: 'Marimekko', element: Marimekko },
  { path: '/Waffle', name: 'Waffle', element: Waffle },
  { path: '/sunburst', name: 'Sunburst', element: Sunburst },
  { path: '/more', name: 'More', element: More },
]

export default routes
