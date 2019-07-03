import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './index.less'
import { Button, Icon } from 'antd'
import { getMessage } from '../../services/home'
import Title from '../../components/title/index'
import BannerVideo from '../../assets/images/banner_video.jpg'
import HomeVideo from '../../assets/medias/home_video.mp4'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: '123'
    }
  }

  componentDidMount() {
    // this.getMessageList()
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
      <div className={styles.home_box}>
        <Title text="官网">企业</Title>
        <div className={styles.video_box}>
          <video
            poster={BannerVideo}
            autoPlay="autoplay"
            loop="loop"
            muted="muted"
            preload="auto"
            width="100%"
            height="auto"
            className={styles.video}
          >
            <source src={HomeVideo} type="video/mp4" />
          </video>
          <div className={styles.video_text_box}>
            <div className={styles.video_text}>
              <p className={styles.video_title}>高等仓</p>
              <p className={styles.video_label}>全国性价比首选产品</p>
              <p className={styles.video_msg}>便宜、价优、实用、真实</p>
              <a href="https://www.baidu.com" className={styles.video_button}>
                立即租仓
              </a>
            </div>
          </div>
          <div className={styles.news_box}>
            <div
              className={`${styles.news_list} ${styles.flex_box} ${
                styles.flex_col_center
              }`}
            >
              <span className={styles.flex}>
                新闻动态：近日公司发出重要通知，由于外部注资加速，公司财务暂时无法支撑，请有钱人排队等候通知
              </span>
              <a href="https://www.baidu.com">查看更多 >></a>
            </div>
          </div>
        </div>
        <div className={styles.view_box}>
          <div className={`${styles.view_content} ${styles.flex_box}`}>
            <div>
              <p className={styles.view_labels}>
                <span className={styles.view_label}>技术驱动</span>
                <span className={styles.view_label}>赋能产业</span>
                <span className={styles.view_label}>开放共赢</span>
              </p>
              <p className={styles.view_list}>
                · 通过物联网、人工智能技术连接生态和驱动效能提升
              </p>
              <p className={styles.view_list}>
                · 运用大数据分析能力和金融等手段，促进产业的繁荣
              </p>
              <p className={styles.view_list}>
                · 开放技术和业务平台，实现商业深度融合、协同发展
              </p>
            </div>
            <div className={styles.flex}>
              <div className={styles.flex_box}>
                <div className={`${styles.view_model} ${styles.flex}`}>
                  <p className={styles.view_model_message}>
                    <span className={styles.view_model_number}>167</span>
                    <span>个</span>
                  </p>
                  <p className={styles.view_model_text}>仓配网络城市</p>
                </div>
                <div className={`${styles.view_model} ${styles.flex}`}>
                  <p className={styles.view_model_message}>
                    <span className={styles.view_model_number}>206</span>
                    <span>万平米</span>
                  </p>
                  <p className={styles.view_model_text}>园区面积</p>
                </div>
                <div className={`${styles.view_model} ${styles.flex}`}>
                  <p className={styles.view_model_message}>
                    <span className={styles.view_model_number}>352</span>
                    <span>万辆/月</span>
                  </p>
                  <p className={styles.view_model_text}>进出园车辆</p>
                </div>
                <div className={`${styles.view_model} ${styles.flex}`}>
                  <p className={styles.view_model_message}>
                    <span className={styles.view_model_number}>143</span>
                    <span>个</span>
                  </p>
                  <p className={styles.view_model_text}>合作伙伴</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.activity_box}>
          <div className={styles.activity_content}>
            <p className={styles.activity_title}>头等舱</p>
            <p className={styles.activity_label}>最优质 最舒适</p>
            <p className={styles.activity_msg}>满足部分小康人群基本生活需求</p>
            <a href="https://www.baidu.com" className={styles.activity_button}>
              查看详情 >
            </a>
          </div>
        </div>
        <div className={styles.logistics_box}>
          <p className={styles.logistics_title}>物流专区</p>
          <div className={`${styles.logistics_list} ${styles.flex_box}`}>
            <div className={`${styles.logistics_model} ${styles.flex}`}>1</div>
            <div className={`${styles.logistics_model} ${styles.flex}`}>1</div>
            <div className={`${styles.logistics_model} ${styles.flex}`}>1</div>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {}

export default connect(({ home }) => ({
  home
}))(Home)
