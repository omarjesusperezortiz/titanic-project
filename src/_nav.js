import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPlus,
  cilBrowser,
  cilBarChart,
  cilGradient,
  cilListFilter,
  cilGrid,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Infographics',
  },
  {
    component: CNavItem,
    name: 'Bars',
    to: '/bars',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Marimekko',
    to: '/marimekko',
    icon: <CIcon icon={cilGradient} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Waffle',
    to: '/Waffle',
    icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Funnel',
    to: '/funnel',
    icon: <CIcon icon={cilListFilter} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'More',
    to: '/more',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
]

export default _nav
