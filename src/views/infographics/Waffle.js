import React, { useState } from 'react'
import { ResponsiveWaffle } from '@nivo/waffle'
import { CCol, CCard, CCardHeader, CCardBody, CButtonGroup, CButton } from '@coreui/react'
import PropTypes from 'prop-types'
import titanicData from '../../data/titanic'

//Funciones con las cuales vamos a filtrar

const isMale = ({ sex, age }) => {
  return sex === 'male' && age > 18
}
const isFemale = ({ sex, age }) => {
  return sex === 'female' && age > 18
}
const isChildren = ({ age }) => {
  return age >= 0.1 && age < 18
}

const firstClass = ({ pclass }) => {
  return pclass === 1
}
const secondClass = ({ pclass }) => {
  return pclass === 2
}
const thirdClass = ({ pclass }) => {
  return pclass === 3
}

//DATAS CONVERTIDAS

const titanicDataRaw = titanicData

const titanicDataClean = titanicDataRaw.map(({ pclass, age, survived, sex }) => {
  return {
    pclass,
    age,
    survived,
    sex,
  }
})

const data = [
  {
    id: 'men',
    label: 'men',
    value: titanicDataClean.filter(isMale).length,
    color: '#468df3',
  },
  {
    id: 'women',
    label: 'women',
    value: titanicDataClean.filter(isFemale).length,
    color: '#ba72ff',
  },
  {
    id: 'children',
    label: 'children',
    value: titanicDataClean.filter(isChildren).length,
    color: '#a1cfff',
  },
]

const dataFirstClass = [
  {
    id: 'men',
    label: 'men',
    value: titanicDataClean.filter(isMale).filter(firstClass).length,
    color: '#468df3',
  },
  {
    id: 'women',
    label: 'women',
    value: titanicDataClean.filter(isFemale).filter(firstClass).length,
    color: '#ba72ff',
  },
  {
    id: 'children',
    label: 'children',
    value: titanicDataClean.filter(isChildren).filter(firstClass).length,
    color: '#a1cfff',
  },
]

const dataSecondClass = [
  {
    id: 'men',
    label: 'men',
    value: titanicDataClean.filter(isMale).filter(secondClass).length,
    color: '#468df3',
  },
  {
    id: 'women',
    label: 'women',
    value: titanicDataClean.filter(isFemale).filter(secondClass).length,
    color: '#ba72ff',
  },
  {
    id: 'children',
    label: 'children',
    value: titanicDataClean.filter(isChildren).filter(secondClass).length,
    color: '#a1cfff',
  },
]

const dataThirdClass = [
  {
    id: 'men',
    label: 'men',
    value: titanicDataClean.filter(isMale).filter(thirdClass).length,
    color: '#468df3',
  },
  {
    id: 'women',
    label: 'women',
    value: titanicDataClean.filter(isFemale).filter(thirdClass).length,
    color: '#ba72ff',
  },
  {
    id: 'children',
    label: 'children',
    value: titanicDataClean.filter(isChildren).filter(thirdClass).length,
    color: '#a1cfff',
  },
]

const MyResponsiveWaffle = ({ data }) => (
  <ResponsiveWaffle
    data={data}
    total={1309}
    rows={18}
    columns={14}
    margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
    colors={{ scheme: 'nivo' }}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.3]],
    }}
    animate={true}
    motionStiffness={90}
    motionDamping={11}
    legends={[
      {
        anchor: 'top-left',
        direction: 'column',
        justify: false,
        translateX: -100,
        translateY: 0,
        itemsSpacing: 4,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        itemTextColor: '#777',
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
              itemBackground: '#f7fafb',
            },
          },
        ],
      },
    ]}
  />
)

MyResponsiveWaffle.propTypes = {
  data: PropTypes.array.isRequired,
}

const WaffleNivo = () => {
  const [viewInfo, setViewInfo] = useState('All')
  return (
    <>
      <CCard>
        <CCardHeader>
          <CCol>
            <h1>Ticket Class by Sex</h1>
          </CCol>
          <CCol>
            <CButtonGroup>
              {['All', 'First Class', 'Second Class', 'Third Class'].map((value) => (
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
          <MyResponsiveWaffle
            data={
              viewInfo === 'All'
                ? data
                : viewInfo === 'First Class'
                ? dataFirstClass
                : viewInfo === 'Second Class'
                ? dataSecondClass
                : dataThirdClass
            }
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default WaffleNivo
