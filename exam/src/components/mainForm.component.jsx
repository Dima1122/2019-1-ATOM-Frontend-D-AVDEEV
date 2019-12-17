import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/fetchWeather'

class MainForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="weatherForm">
          <div className="cardList"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  weatherInfo: state.WeatherInfo,
})

const mapDispatchToProps = (dispatch) => ({
  loadWeather: (city) => dispatch(actions.fetchWeather(city)),
  loadWeatherByGeo: () => dispatch(actions.fetchWeatherByGeo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainForm)
