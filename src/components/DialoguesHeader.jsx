import React from 'react'
import styles from '../styles/DialoguesHeader.module.css'

export function DialoguesHeader() {
  return (
    <div className={styles.header}>
      <input type="checkbox" id="checkbox4" className={styles.checkbox4 + ' ' + styles.visuallyHidden} />
      <label htmlFor="checkbox4">
        <div className={styles.hamburger + ' ' + styles.hamburger4}>
          <span className={styles.bar + ' ' + styles.bar1} />
          <span className={styles.bar + ' ' + styles.bar2} />
          <span className={styles.bar + ' ' + styles.bar3} />
          <span className={styles.bar + ' ' + styles.bar4} />
          <span className={styles.bar + ' ' + styles.bar5} />
        </div>
      </label>
      <div className={styles.messenger}>Dimanich Messenger</div>
      <div className={styles.searchButton}>
        <img
          className={styles.searchButton}
          src="https://im0-tub-ru.yandex.net/i?id=48aff79a613972e36ec3fe0bb6886909&n=13"
          alt="Settings Button"
        />
      </div>
    </div>
  )
}
