import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        Powered by CoreUI &amp; React &amp; Nivo - Developed by Omar Perez
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
