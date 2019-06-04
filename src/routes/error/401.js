import React, { Component } from 'react'
import { connect } from 'dva'

class Error401 extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <p>401</p>
      </div>
    )
  }
}

export default connect()(Error401)
