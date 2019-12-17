import axios from 'axios'

const Api_Key = 'a2df596b1f176ee0d6618cf361f63153'

export const fetchWeather = (city) => (dispatch) => {
  console.log(city)
  axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`)
    .then((response) => {
      return response.data
    })
    .then((weather) => {
      console.log(weather)
      dispatch({ type: 'FETCH_WEATHER', payload: weather })
    })
    .catch((err) => {
      console.log(err)
    })
}

export const fetchWeatherByGeo = () => (dispatch) => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords
    axios(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Api_Key}`)
      .then((response) => {
        return response.data
      })
      .then((weather) => {
        console.log(weather)
        dispatch({ type: 'FETCH_WEATHER_GEO', payload: weather })
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
