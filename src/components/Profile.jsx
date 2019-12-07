import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Profile.module.css'

export function Profile(props) {
  const { style } = props

  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'unset' }}>
            <button className={styles.backButton}>Back</button>
          </Link>
          <button className={styles.submitButton}>Edit Profile</button>
        </div>
      </div>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://im0-tub-ru.yandex.net/i?id=251924006823dd06b0ce06d758f3e6e2&n=13"
          alt="avatar"
        />
        <div className={styles.formContainer}>
          <div className={styles.formLabel}>Full name</div>
          <input className={styles.inputForm} placeholder="Avdeev Dmitry" />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formLabel}>Username</div>
          <input className={styles.inputForm} placeholder="Dimka1111" />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formLabel}>Status</div>
          <input className={styles.inputForm} placeholder="No status" />
        </div>
      </div>
    </div>
  )
}
