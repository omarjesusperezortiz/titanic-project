import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'

const More = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h1>More Information</h1>
        </CCardHeader>
        <CCardBody>
          <h3>Explanation of the project</h3>
          <p>
            For this project, I have restructured the JSON titanic data into many different types of
            arrays of objects classifying it by age,sex and ticket class. This classification has
            been set into Nivo charts so we can make survival conclusions with the data we have.
          </p>
          <h3>Tools</h3>
          <p>This project has been developed with React, CoreUi and Nivo</p>
          <h3>More Info</h3>
          <p>
            For more information you can check my{' '}
            <a href="https://github.com/omarjesusperezortiz">GitHub</a>
          </p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default More
