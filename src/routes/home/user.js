import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './index.less'

class Home1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: '123'
    }
  }

  shouldComponentUpdate(nextProps, nextStates) {
    if (this.state.status === nextStates.status) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <div>
        <p className={styles.title}>孙子</p>
      </div>
    )
  }
}

export default connect(({ home }) => ({
  home
}))(Home1)
