import React, { useState, useEffect } from 'react'
import styles from './index.less'

function Title(props) {
  const [count, setCount] = useState(0)
  console.log(props)

  useEffect(() => {
    console.log(props)
    console.log('effect title update')
  }, [count])

  return (
    <div className={styles.title_box} onClick={() => setCount(count + 1)}>
      <span className={styles.title_text}>
        {props.children}-{props.text}-{count}
      </span>
    </div>
  )
}

export default Title
