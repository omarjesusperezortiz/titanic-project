import React, { useState } from 'react'
import { ResponsiveMarimekko } from '@nivo/marimekko'
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
const notSurvived = ({ survived }) => {
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

const lessThanTen = ({ age }) => {
  return age >= 0.1 && age < 10
}
const betweenTenAndTwenty = ({ age }) => {
  return age >= 10 && age < 20
}
const betweenTwentyAndThirty = ({ age }) => {
  return age >= 20 && age < 30
}
const betweenThirtyAndForty = ({ age }) => {
  return age >= 30 && age < 40
}
const betweenFortyAndFifty = ({ age }) => {
  return age >= 40 && age < 50
}
const betweenFiftyAndSixty = ({ age }) => {
  return age >= 50 && age < 60
}
const betweenSixtyAndSeventy = ({ age }) => {
  return age >= 60 && age < 70
}
const betweenSeventyAndEighty = ({ age }) => {
  return age >= 70 && age <= 80
}

//By Age

const titanicLessThanTen = titanicDataClean.filter(lessThanTen)
const titanicBetweenTenAndTwenty = titanicDataClean.filter(betweenTenAndTwenty)
const titanicBetweenTwentyAndThirty = titanicDataClean.filter(betweenTwentyAndThirty)
const titanicBetweenThirtyAndForty = titanicDataClean.filter(betweenThirtyAndForty)
const titanicBetweenFortyAndFifty = titanicDataClean.filter(betweenFortyAndFifty)
const titanicBetweenFiftyAndSixty = titanicDataClean.filter(betweenFiftyAndSixty)
const titanicBetweenSixtyAndSeventy = titanicDataClean.filter(betweenSixtyAndSeventy)
const titanicBetweenSeventyAndEighty = titanicDataClean.filter(betweenSeventyAndEighty)

const data = [
  {
    statement: '0 - 10',
    participation: 10,
    maleSurvived: titanicLessThanTen.filter(isMale).filter(survived).length,
    femaleSurvived: titanicLessThanTen.filter(isFemale).filter(survived).length,
    maleNotSurvived: titanicLessThanTen.filter(isMale).filter(notSurvived).length,
    femaleNotSurvived: titanicLessThanTen.filter(isFemale).filter(notSurvived).length,
  },
  {
    statement: '10 - 20',
    participation: 10,
    maleSurvived: titanicBetweenTenAndTwenty.filter(isMale).filter(survived).length,
    femaleSurvived: titanicBetweenTenAndTwenty.filter(isFemale).filter(survived).length,
    maleNotSurvived: titanicBetweenTenAndTwenty.filter(isMale).filter(notSurvived).length,
    femaleNotSurvived: titanicBetweenTenAndTwenty.filter(isFemale).filter(notSurvived).length,
  },
  {
    statement: '20 - 30',
    participation: 10,
    maleSurvived: titanicBetweenTwentyAndThirty.filter(isMale).filter(survived).length,
    femaleSurvived: titanicBetweenTwentyAndThirty.filter(isFemale).filter(survived).length,
    maleNotSurvived: titanicBetweenTwentyAndThirty.filter(isMale).filter(notSurvived).length,
    femaleNotSurvived: titanicBetweenTwentyAndThirty.filter(isFemale).filter(notSurvived).length,
  },
  {
    statement: '30 - 40',
    participation: 10,
    maleSurvived: titanicBetweenThirtyAndForty.filter(isMale).filter(survived).length,
    femaleSurvived: titanicBetweenThirtyAndForty.filter(isFemale).filter(survived).length,
    maleNotSurvived: titanicBetweenThirtyAndForty.filter(isMale).filter(notSurvived).length,
    femaleNotSurvived: titanicBetweenThirtyAndForty.filter(isFemale).filter(notSurvived).length,
  },
  {
    statement: '40 - 50',
    participation: 10,
    maleSurvived: titanicBetweenFortyAndFifty.filter(isMale).filter(survived).length,
    femaleSurvived: titanicBetweenFortyAndFifty.filter(isFemale).filter(survived).length,
    maleNotSurvived: titanicBetweenFortyAndFifty.filter(isMale).filter(notSurvived).length,
    femaleNotSurvived: titanicBetweenFortyAndFifty.filter(isFemale).filter(notSurvived).length,
  },
  {
    statement: '50 - 60',
    participation: 10,
    maleSurvived: titanicBetweenFiftyAndSixty.filter(isMale).filter(survived).length,
    femaleSurvived: titanicBetweenFiftyAndSixty.filter(isFemale).filter(survived).length,
    maleNotSurvived: titanicBetweenFiftyAndSixty.filter(isMale).filter(notSurvived).length,
    femaleNotSurvived: titanicBetweenFiftyAndSixty.filter(isFemale).filter(notSurvived).length,
  },
  {
    statement: '60 - 70',
    participation: 10,
    maleSurvived: titanicBetweenSixtyAndSeventy.filter(isMale).filter(survived).length,
    femaleSurvived: titanicBetweenSixtyAndSeventy.filter(isFemale).filter(survived).length,
    maleNotSurvived: titanicBetweenSixtyAndSeventy.filter(isMale).filter(notSurvived).length,
    femaleNotSurvived: titanicBetweenSixtyAndSeventy.filter(isFemale).filter(notSurvived).length,
  },
  {
    statement: '70 - 80',
    participation: 10,
    maleSurvived: titanicBetweenSeventyAndEighty.filter(isMale).filter(survived).length,
    femaleSurvived: titanicBetweenSeventyAndEighty.filter(isFemale).filter(survived).length,
    maleNotSurvived: titanicBetweenSeventyAndEighty.filter(isMale).filter(notSurvived).length,
    femaleNotSurvived: titanicBetweenSeventyAndEighty.filter(isFemale).filter(notSurvived).length,
  },
]
const dataFull = [
  {
    statement: '0 - 10',
    participation: 10,
    maleSurvived: titanicLessThanTen.filter(isMale).filter(survived),
    femaleSurvived: titanicLessThanTen.filter(isFemale).filter(survived),
    maleNotSurvived: titanicLessThanTen.filter(isMale).filter(notSurvived),
    femaleNotSurvived: titanicLessThanTen.filter(isFemale).filter(notSurvived),
  },
  {
    statement: '10 - 20',
    participation: 10,
    maleSurvived: titanicBetweenTenAndTwenty.filter(isMale).filter(survived),
    femaleSurvived: titanicBetweenTenAndTwenty.filter(isFemale).filter(survived),
    maleNotSurvived: titanicBetweenTenAndTwenty.filter(isMale).filter(notSurvived),
    femaleNotSurvived: titanicBetweenTenAndTwenty.filter(isFemale).filter(notSurvived),
  },
  {
    statement: '20 - 30',
    participation: 10,
    maleSurvived: titanicBetweenTwentyAndThirty.filter(isMale).filter(survived),
    femaleSurvived: titanicBetweenTwentyAndThirty.filter(isFemale).filter(survived),
    maleNotSurvived: titanicBetweenTwentyAndThirty.filter(isMale).filter(notSurvived),
    femaleNotSurvived: titanicBetweenTwentyAndThirty.filter(isFemale).filter(notSurvived),
  },
  {
    statement: '30 - 40',
    participation: 10,
    maleSurvived: titanicBetweenThirtyAndForty.filter(isMale).filter(survived),
    femaleSurvived: titanicBetweenThirtyAndForty.filter(isFemale).filter(survived),
    maleNotSurvived: titanicBetweenThirtyAndForty.filter(isMale).filter(notSurvived),
    femaleNotSurvived: titanicBetweenThirtyAndForty.filter(isFemale).filter(notSurvived),
  },
  {
    statement: '40 - 50',
    participation: 10,
    maleSurvived: titanicBetweenFortyAndFifty.filter(isMale).filter(survived),
    femaleSurvived: titanicBetweenFortyAndFifty.filter(isFemale).filter(survived),
    maleNotSurvived: titanicBetweenFortyAndFifty.filter(isMale).filter(notSurvived),
    femaleNotSurvived: titanicBetweenFortyAndFifty.filter(isFemale).filter(notSurvived),
  },
  {
    statement: '50 - 60',
    participation: 10,
    maleSurvived: titanicBetweenFiftyAndSixty.filter(isMale).filter(survived),
    femaleSurvived: titanicBetweenFiftyAndSixty.filter(isFemale).filter(survived),
    maleNotSurvived: titanicBetweenFiftyAndSixty.filter(isMale).filter(notSurvived),
    femaleNotSurvived: titanicBetweenFiftyAndSixty.filter(isFemale).filter(notSurvived),
  },
  {
    statement: '60 - 70',
    participation: 10,
    maleSurvived: titanicBetweenSixtyAndSeventy.filter(isMale).filter(survived),
    femaleSurvived: titanicBetweenSixtyAndSeventy.filter(isFemale).filter(survived),
    maleNotSurvived: titanicBetweenSixtyAndSeventy.filter(isMale).filter(notSurvived),
    femaleNotSurvived: titanicBetweenSixtyAndSeventy.filter(isFemale).filter(notSurvived),
  },
  {
    statement: '70 - 80',
    participation: 10,
    maleSurvived: titanicBetweenSeventyAndEighty.filter(isMale).filter(survived),
    femaleSurvived: titanicBetweenSeventyAndEighty.filter(isFemale).filter(survived),
    maleNotSurvived: titanicBetweenSeventyAndEighty.filter(isMale).filter(notSurvived),
    femaleNotSurvived: titanicBetweenSeventyAndEighty.filter(isFemale).filter(notSurvived),
  },
]
const dataFirstClass = dataFull.map(
  ({ maleSurvived, maleNotSurvived, femaleSurvived, femaleNotSurvived, ...rest }) => {
    return {
      maleSurvived: maleSurvived.filter(firstClass).length,
      maleNotSurvived: maleNotSurvived.filter(firstClass).length,
      femaleSurvived: femaleSurvived.filter(firstClass).length,
      femaleNotSurvived: femaleNotSurvived.filter(firstClass).length,
      ...rest,
    }
  },
)
const dataSecondClass = dataFull.map(
  ({ maleSurvived, maleNotSurvived, femaleSurvived, femaleNotSurvived, ...rest }) => {
    return {
      maleSurvived: maleSurvived.filter(secondClass).length,
      maleNotSurvived: maleNotSurvived.filter(secondClass).length,
      femaleSurvived: femaleSurvived.filter(secondClass).length,
      femaleNotSurvived: femaleNotSurvived.filter(secondClass).length,
      ...rest,
    }
  },
)
const dataThirdClass = dataFull.map(
  ({ maleSurvived, maleNotSurvived, femaleSurvived, femaleNotSurvived, ...rest }) => {
    return {
      maleSurvived: maleSurvived.filter(thirdClass).length,
      maleNotSurvived: maleNotSurvived.filter(thirdClass).length,
      femaleSurvived: femaleSurvived.filter(thirdClass).length,
      femaleNotSurvived: femaleNotSurvived.filter(thirdClass).length,
      ...rest,
    }
  },
)

const MyResponsiveMarimekko = ({ data }) => (
  <ResponsiveMarimekko
    data={data}
    id="statement"
    value="participation"
    dimensions={[
      {
        id: 'female survived',
        value: 'femaleSurvived',
      },
      {
        id: 'female not survived',
        value: 'femaleNotSurvived',
      },
      {
        id: 'male survived',
        value: 'maleSurvived',
      },
      {
        id: 'male not survived',
        value: 'maleNotSurvived',
      },
    ]}
    innerPadding={5}
    axisTop={null}
    axisRight={{
      orient: 'right',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendOffset: 0,
    }}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'age',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'total',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
    colors={{ scheme: 'spectral' }}
    borderWidth={3}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.2]],
    }}
    defs={[
      {
        id: 'lines',
        type: 'patternLines',
        background: 'rgba(0, 0, 0, 0)',
        color: 'inherit',
        rotation: -45,
        lineWidth: 4,
        spacing: 8,
      },
    ]}
    fill={[
      {
        match: {
          id: 'female not survived',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'male not survived',
        },
        id: 'lines',
      },
    ]}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 80,
        itemsSpacing: 0,
        itemWidth: 140,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'right-to-left',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'square',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
)

MyResponsiveMarimekko.propTypes = {
  data: PropTypes.array.isRequired,
}

const MarimekkoNivo = () => {
  const [viewInfo, setViewInfo] = useState('All')
  return (
    <>
      <CCard>
        <CCardHeader>
          <CCol>
            <h1>Survivors by Sex, Age and Class</h1>
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
          <MyResponsiveMarimekko
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

export default MarimekkoNivo
