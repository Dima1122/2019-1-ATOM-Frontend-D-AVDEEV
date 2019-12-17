import React from 'react'
import WeatherCard from './WeatherCard.component'

const Weather = (props) => {
  const { weatherInfo } = props
  if (weatherInfo.length === 0) {
    return ''
  }
  const weathers = weatherInfo.map((weather, idx) => {
    return <WeatherCard key={idx} info={weather} />
  })
  return <div className="containerW">{weathers}</div>
}

export default Weather
