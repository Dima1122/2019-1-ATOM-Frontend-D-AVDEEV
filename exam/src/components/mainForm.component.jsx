import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/fetchWeather'
import Form from './form.component'
import Weather from './weather.component'
import styles from '../styles/mainform.module.css'

class MainForm extends React.Component {
  constructor(props) {
    super(props)
    this.loadFavs()
  }

  loadFavs() {
    const favs = [
      'Moscow',
      'Sochi',
      'London',
      'Barcelona',
      'New York',
      'Washington',
      'Berlin',
      'Warsaw',
      'Zurich',
      'Madrid',
    ]
    favs.forEach((fav) => {
      this.props.loadWeather({ city: fav }, 'byCity')
    })
  }

  render() {
    return (
      <div className={styles.mainform}>
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
  loadWeather: (arg, method) => dispatch(actions.fetchWeather(arg, method)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainForm)
