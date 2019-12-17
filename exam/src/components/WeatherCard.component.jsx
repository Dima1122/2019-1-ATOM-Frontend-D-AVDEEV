import React from 'react'
import kelvinToCelsius from '../utils/convertUnits'
import styles from '../styles/weatherCard.module.css'

const WeatherCard = (props) => {
  const { info } = props
  return (
    <div className={styles.dialogueweather}>
      <div className="upper">
        <div className="left">
          <div className="city">{info.name}</div>
          <div className="cityCountry">
            {info.name}, {info.sys.country}
          </div>
        </div>
        <div className="right">
          <div className="weatherIcon"></div>
          <div className="temperature">{kelvinToCelsius(info.main.temp)}&deg;</div>
        </div>
      </div>
      <div className="lower">
        <div className="left">{info.main.humidity}%</div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default WeatherCard
