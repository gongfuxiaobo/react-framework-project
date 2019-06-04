import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './index.less'

class Message extends Component {
  render() {
    return (
      <div>
        <p className={styles.title}>信息</p>
      </div>
    )
  }
}

Message.propTypes = {}

export default connect()(Message)
