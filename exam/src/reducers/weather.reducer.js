const weatherInfo = (
  state = {
    weatherinfo: [],
  },
  action,
) => {
  if (action.type === 'FETCH_WEATHER') {
    state = { ...state, weatherinfo: [...state.weatherinfo, action.payload] }
  }
  if (action.type === 'FETCH_WEATHER_GEO') {
    state = { ...state, weatherinfo: [...state.weatherinfo, action.payload] }
  }
  return state
}

export default weatherInfo
