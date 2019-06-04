import React, { Component } from 'react'
import { connect } from 'dva'

class Error404 extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <p>404</p>
      </div>
    )
  }
}

export default connect()(Error404)
