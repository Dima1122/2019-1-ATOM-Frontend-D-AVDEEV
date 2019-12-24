import React from 'react'
import findMe from '../utils/findMe'
import styles from '../styles/form.module.css'

const Form = (props) => {
  const { loadWeather } = props
  const processSubmit = (event) => {
    event.preventDefault()
    const { city } = event.target.elements
    const arg = {
      city: city.value,
    }
    loadWeather(arg, 'byCity')
  }

  return (
    <div className="Container">
      <form onSubmit={processSubmit} className={styles.form}>
        <input className={styles.input} type="text" placeholder="City" name="city"></input>
        <button className={styles.btn}>Search</button>
        <button
          className={styles.btn}
          type="button"
          onClick={() => {
            findMe((position) => {
              const method = 'byGeolocation'
              loadWeather(position.coords, method)
            })
          }}
        >
          Geo
        </button>
      </form>
    </div>
  )
}

export default Form
