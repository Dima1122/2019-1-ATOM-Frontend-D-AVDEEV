import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'

export function ChatHeader(props) {
  const { details, clickBack } = props
  return (
    <div className={styles.header}>
      <Link to={'/'}>
        <button onClick={clickBack} className={styles.Backbutton}>
          Back
        </button>
      </Link>
      <div className={styles.chatInfo}>
        <Link to={`/profile/${details.id}`}>
          <img
            className={styles.avatarImage}
            src="https://im0-tub-ru.yandex.net/i?id=251924006823dd06b0ce06d758f3e6e2&n=13"
            alt="Avatar"
          />
        </Link>
        <div className={styles.senderInfo}>
          <div>{details.title}</div>
          <div>Status: unknown</div>
        </div>
      </div>
      <input
        type="image"
        className={styles.settingsButton}
        src="https://im0-tub-ru.yandex.net/i?id=48aff79a613972e36ec3fe0bb6886909&n=13"
        alt="settings button"
      />
    </div>
  )
}
