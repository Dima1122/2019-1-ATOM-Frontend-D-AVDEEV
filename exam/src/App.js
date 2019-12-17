import React from 'react'
import './App.css'
import Weather from './components/weather.component'
import Form from './components/form.component'

import * as actions from './actions/fetchWeather'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form loadWeather={this.props.loadWeather} />
        <Weather weatherInfo={this.props.weatherInfo.weatherinfo} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
