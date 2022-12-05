import React, { useState } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import PropTypes from 'prop-types'
import { CCol, CCard, CCardHeader, CCardBody, CButtonGroup, CButton } from '@coreui/react'
import titanicData from '../../data/titanic'

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
const not_survived = ({ survived }) => {
  return survived === false
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
const isMale = ({ sex }) => {
  return sex === 'male'
}
const isFemale = ({ sex }) => {
  return sex === 'female'
}

//By Age

const titanicDataNull = titanicDataClean.filter(({ age }) => {
  return age === null
})
const titanicDataChild = titanicDataClean.filter(({ age }) => {
  return age >= 0.1 && age < 16
})
const titanicDataYoung = titanicDataClean.filter(({ age }) => {
  return age >= 16 && age < 30
})
const titanicDataAdult = titanicDataClean.filter(({ age }) => {
  return age >= 30 && age < 60
})
const titanicDataElderly = titanicDataClean.filter(({ age }) => {
  return age >= 60
})

//By Age If Survived

const titanicDataNullSurvived = titanicDataNull.filter(survived)
const titanicDataChildSurvived = titanicDataChild.filter(survived)
const titanicDataYoungSurvived = titanicDataYoung.filter(survived)
const titanicDataAdultSurvived = titanicDataAdult.filter(survived)
const titanicDataElderlySurvived = titanicDataElderly.filter(survived)

const titanicDataNullnot_survived = titanicDataNull.filter(not_survived)
const titanicDataChildnot_survived = titanicDataChild.filter(not_survived)
const titanicDataYoungnot_survived = titanicDataYoung.filter(not_survived)
const titanicDataAdultnot_survived = titanicDataAdult.filter(not_survived)
const titanicDataElderlynot_survived = titanicDataElderly.filter(not_survived)

const dataFull = [
  {
    age: 'Undefined',
    survived: titanicDataNullSurvived,
    not_survived: titanicDataNullnot_survived,
  },
  {
    age: '< 15',
    survived: titanicDataChildSurvived,
    not_survived: titanicDataChildnot_survived,
  },
  {
    age: '16 - 29',
    survived: titanicDataYoungSurvived,
    not_survived: titanicDataYoungnot_survived,
  },
  {
    age: '30 - 59',
    survived: titanicDataAdultSurvived,
    not_survived: titanicDataAdultnot_survived,
  },
  {
    age: '60 <',
    survived: titanicDataElderlySurvived,
    not_survived: titanicDataElderlynot_survived,
  },
]

const data = dataFull.map(({ age, survived, not_survived }) => {
  return {
    age: age,
    survived: survived.length,
    not_survived: not_survived.length,
  }
})

const dataByMale = dataFull.map(({ age, survived, not_survived }) => {
  return {
    age: age,
    survived: survived.filter(isMale).length,
    not_survived: not_survived.filter(isMale).length,
  }
})

const dataByFemale = dataFull.map(({ age, survived, not_survived }) => {
  return {
    age: age,
    survived: survived.filter(isFemale).length,
    not_survived: not_survived.filter(isFemale).length,
  }
})
const dataFirstClass = dataFull.map(({ age, survived, not_survived }) => {
  return {
    age: age,
    survived: survived.filter(firstClass).length,
    not_survived: not_survived.filter(firstClass).length,
  }
})
const dataSecondClass = dataFull.map(({ age, survived, not_survived }) => {
  return {
    age: age,
    survived: survived.filter(secondClass).length,
    not_survived: not_survived.filter(secondClass).length,
  }
})
const dataThirdClass = dataFull.map(({ age, survived, not_survived }) => {
  return {
    age: age,
    survived: survived.filter(thirdClass).length,
    not_survived: not_survived.filter(thirdClass).length,
  }
})

const MyResponsiveBar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['survived', 'not_survived']}
    indexBy="age"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'asd',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'not survived',
        },
        id: 'lines',
      },
    ]}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'age',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'survivors',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
    }}
  />
)

const MyResponsiveBar2 = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['survived', 'not survived']}
    indexBy="age"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'asd',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'not survived',
        },
        id: 'lines',
      },
    ]}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'age',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'survivors',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
    }}
  />
)

MyResponsiveBar.propTypes = {
  data: PropTypes.array.isRequired,
}

MyResponsiveBar2.propTypes = {
  data: PropTypes.array.isRequired,
}

const BarsNivo = () => {
  const [viewInfo, setViewInfo] = useState('All')
  const [viewInfo2, setViewInfo2] = useState('All')
  return (
    <>
      <CCard>
        <CCardHeader>
          <CCol>
            <h1>Survivor by Sex and Age</h1>
          </CCol>
          <CCol>
            <CButtonGroup>
              {['All', 'Male', 'Female'].map((value) => (
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
          <MyResponsiveBar
            data={viewInfo === 'All' ? data : viewInfo === 'Male' ? dataByMale : dataByFemale}
          />
        </CCardBody>
      </CCard>
      <CCard style={{ marginTop: '40px' }}>
        <CCardHeader>
          <CCol>
            <h1>Survivor by Ticket Class and Age</h1>
          </CCol>
          <CCol>
            <CButtonGroup>
              {['All', 'First Class', 'Second Class', 'Third Class'].map((value) => (
                <CButton
                  color="outline-secondary"
                  key={value}
                  active={value === viewInfo2}
                  onClick={() => setViewInfo2(value)}
                >
                  {value}
                </CButton>
              ))}
            </CButtonGroup>
          </CCol>
        </CCardHeader>
        <CCardBody style={{ height: '500px' }}>
          <MyResponsiveBar
            data={
              viewInfo2 === 'All'
                ? data
                : viewInfo2 === 'First Class'
                ? dataFirstClass
                : viewInfo2 === 'Second Class'
                ? dataSecondClass
                : dataThirdClass
            }
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default BarsNivo
