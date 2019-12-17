import React from 'react'

const Form = (props) => {
  const { loadWeather } = props
  const processSubmit = (event) => {
    event.preventDefault()
    const { city } = event.target.elements
    loadWeather(city.value)
  }

  return (
    <div className="container">
      <form onSubmit={processSubmit}>
        <input type="text" placeholder="City" name="city"></input>
        <button>Search</button>
        <button>Geo</button>
      </form>
    </div>
  )
}

export default Form
