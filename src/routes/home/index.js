import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './index.less'
import { Button, Icon } from 'antd'
import { getMessage } from '../../services/home'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: '123'
    }
  }

  componentDidMount() {
    this.getMessageList()
  }

  // 异步数据处理
  changeModel = () => {
    const { dispatch } = this.props

    dispatch({
      type: 'home/getUserInfoList',
      payload: {
        id: 2,
        name: 'admin2',
        platform: 1
      }
    })
  }

  // 同步数据处理
  changeData = () => {
    const { dispatch } = this.props

    dispatch({
      type: 'home/getUserInfo',
      payload: {
        userInfo: {
          id: 2,
          name: 'admin2',
          platform: 1
        }
      }
    })
  }

  getMessageList = () => {
    getMessage('')
      .then(res => {
        console.log(res)
      })
      .catch(res => {
        console.log(res)
      })
  }

  render() {
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
