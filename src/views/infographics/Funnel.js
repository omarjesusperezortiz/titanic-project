import React, { useState } from 'react'
import { ResponsiveFunnel } from '@nivo/funnel'
import PropTypes from 'prop-types'
import { CCol, CCard, CCardHeader, CCardBody, CButtonGroup, CButton } from '@coreui/react'
import titanicData from '../../data/titanic'

// ANTIGUA LOGICA
// const titanicFirstClass = []
// // const titanicSecondClass = []
// // const titanicThirdClass = []
// for (let i = 0; i < titanicData.length; i++) {
//   if (titanicData[i].pclass === 1) {
//     // titanicFirstClass.push(titanicData[i])
//   } else if (titanicData[i].pclass === 2) {
//     titanicSecondClass.push(titanicData[i])
//   } else if (titanicData[i].pclass === 3) {
//     titanicThirdClass.push(titanicData[i])
//   }
// }
// // const titanicFirstClassSurvived = []
// const titanicSecondClassSurvived = []
// const titanicThirdClassSurvived = []
// for (let i = 0; i < titanicData.length; i++) {
//   if (titanicData[i].pclass === 1 && titanicData[i].survived === true) {
//     // titanicFirstClassSurvived.push(titanicData[i])
//   } else if (titanicData[i].pclass === 2 && titanicData[i].survived === true) {
//     titanicSecondClassSurvived.push(titanicData[i])
//   } else if (titanicData[i].pclass === 3 && titanicData[i].survived === true) {
//     titanicThirdClassSurvived.push(titanicData[i])
//   }
// }

// const titanicFirstClassNotSurvived = []
// const titanicSecondClassNotSurvived = []
// const titanicThirdClassNotSurvived = []
// for (let i = 0; i < titanicData.length; i++) {
//   if (titanicData[i].pclass === 1 && titanicData[i].survived === false) {
//     titanicFirstClassNotSurvived.push(titanicData[i])
//   } else if (titanicData[i].pclass === 2 && titanicData[i].survived === false) {
//     titanicSecondClassNotSurvived.push(titanicData[i])
//   } else if (titanicData[i].pclass === 3 && titanicData[i].survived === false) {
//     titanicThirdClassNotSurvived.push(titanicData[i])
//   }
// }

const titanicDataRaw = titanicData

const titanicDataClean = titanicDataRaw.map(({ pclass, age, survived, sex }) => {
  return {
    pclass,
    age,
    survived,
    sex,
  }
})

const survived = ({ survived }) => {
  return survived === true
}
const notSurvived = ({ survived }) => {
  return survived === false
}

//By Class

const titanicFirstClass = titanicDataClean.filter(({ pclass }) => {
  return pclass === 1
})
const titanicSecondClass = titanicDataClean.filter(({ pclass }) => {
  return pclass === 2
})
const titanicThirdClass = titanicDataClean.filter(({ pclass }) => {
  return pclass === 3
})

//By Class If Survived

const titanicFirstClassSurvived = titanicFirstClass.filter(survived)
const titanicSecondClassSurvived = titanicSecondClass.filter(survived)
const titanicThirdClassSurvived = titanicThirdClass.filter(survived)

const titanicFirstClassNotSurvived = titanicFirstClass.filter(notSurvived)
const titanicSecondClassNotSurvived = titanicSecondClass.filter(notSurvived)
const titanicThirdClassNotSurvived = titanicThirdClass.filter(notSurvived)

const data = [
  {
    id: 'first_class',
    value: titanicFirstClass.length,
    label: 'First Class',
  },
  {
    id: 'second_class',
    value: titanicSecondClass.length,
    label: 'Second Class',
  },
  {
    id: 'third_class',
    value: titanicThirdClass.length,
    label: 'Third Class',
  },
]

const data2 = [
  {
    id: 'first_class',
    value: titanicFirstClassSurvived.length,
    label: 'First Class Survived',
  },
  {
    id: 'second_class',
    value: titanicSecondClassSurvived.length,
    label: 'Second Class Survived',
  },
  {
    id: 'third_class',
    value: titanicThirdClassSurvived.length,
    label: 'Third Class Survived',
  },
]

const data3 = [
  {
    id: 'first_class',
    value: titanicFirstClassNotSurvived.length,
    label: 'First Class Not Survived',
  },
  {
    id: 'second_class',
    value: titanicSecondClassNotSurvived.length,
    label: 'Second Class Not Survived',
  },
  {
    id: 'third_class',
    value: titanicThirdClassNotSurvived.length,
    label: 'Third Class Not Survived',
  },
]

const MyResponsiveFunnel = ({ data }) => (
  <ResponsiveFunnel
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    valueFormat=">-.4s"
    colors={{ scheme: 'spectral' }}
    borderWidth={20}
    labelColor={{
      from: 'color',
      modifiers: [['darker', 3]],
    }}
    beforeSeparatorLength={50}
    beforeSeparatorOffset={20}
    afterSeparatorLength={50}
    afterSeparatorOffset={20}
    currentPartSizeExtension={10}
    currentBorderWidth={40}
    motionConfig="wobbly"
  />
)

MyResponsiveFunnel.propTypes = {
  data: PropTypes.array.isRequired,
}

const FunnelNivo = () => {
  const [viewInfo, setViewInfo] = useState('All')

  return (
    <CCard>
      <CCardHeader>
        <CCol>
          <h1>Class Type Info</h1>
        </CCol>
        <CCol>
          <CButtonGroup>
            {['All', 'Survivors', 'Not Survivors'].map((value) => (
              <CButton
                color="outline-secondary"
                key={value}
                active={value === viewInfo}
                onClick={() => setViewInfo(value)}
              >
                {value}
              </CButton>
            ))}
          </CButtonGroup>
        </CCol>
      </CCardHeader>
      <CCardBody style={{ height: '500px' }}>
        <MyResponsiveFunnel
          data={viewInfo === 'All' ? data : viewInfo === 'Survivors' ? data2 : data3}
        />
      </CCardBody>
    </CCard>
  )
}

export default FunnelNivo
