import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/DialogueItem.module.css'
import MyContext from './MyContext.Context'

export function DialogueItem(props) {
  const { chat } = props
  const formattedTime = new Date(chat.lastMessage.time)
  return (
    <MyContext.Consumer>
      {(value) => (
        <div className={styles.dialogue}>
          <Link to={`/profile/${chat.id}`} style={{ textDecoration: 'none' }}>
            <img
              className={styles.avatar}
              src="https://im0-tub-ru.yandex.net/i?id=251924006823dd06b0ce06d758f3e6e2&n=13"
              alt="avatar"
            />
          </Link>
          <div className={styles.wrapper}>
            <Link to={`/chat/${chat.id}`} style={{ textDecoration: 'none', color: 'unset' }}>
              <div className={styles.text}>
                <div className={styles.name}>{chat.title}</div>
                <div className={styles.time}>
                  {formattedTime.toLocaleString('ru', {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.message}>{chat.lastMessage.content}</div>
                <div className={styles.status}>{chat.lastMessage.status}</div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  )
}
