import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './index.less'
import { Button, Icon } from 'antd'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: '123'
    }
  }

  changeData = () => {
    const { dispatch } = this.props
    console.log(444444)
    console.log(this.props)
    console.log(dispatch)
    dispatch({
      type: 'home/getUserInfoList',
      payload: {
        id: 2,
        name: 'admin2',
        platform: 1
      }
    })
  }

  render() {
    console.log(this.props.home.userInfo)
    return (
      <div>
        <p className={styles.title}>你瞅啥{this.props.home.userInfo.name}</p>
        <p onClick={this.changeData}>瞅你咋地</p>
        <p onClick={this.changeData.bind(this)}>再瞅一个试试</p>
        <Button type="primary">Primary</Button>
        <Button type="primary">
          <Icon type="left" />
          Backward
        </Button>
        <Button type="primary" shape="circle" loading />
      </div>
    )
  }
}

Home.propTypes = {}

export default connect(({ home }) => ({
  home
}))(Home)
