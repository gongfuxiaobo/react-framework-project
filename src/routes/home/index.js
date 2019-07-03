import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './index.less'
import { Button, Icon } from 'antd'
import { getMessage } from '../../services/home'
import Title from '../../components/title/index'
import BannerVideo from '../../assets/images/banner_video.jpg'
import HomeVideo from '../../assets/medias/home_video.mp4'
import Logistics1 from '../../assets/images/logistics_1.png'
import Logistics2 from '../../assets/images/logistics_2.png'
import Logistics3 from '../../assets/images/logistics_3.png'
import LogisticsCloud from '../../assets/images/logistics_cloud.jpg'

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
            <a
              href="https://www.baidu.com"
              className={`${styles.activity_button} ${
                styles.normal_transition
              }`}
            >
              查看详情 >
            </a>
          </div>
        </div>
        <div className={styles.logistics_box}>
          <p className={styles.logistics_title}>物流专区</p>
          <div className={`${styles.logistics_list}`}>
            <div className={styles.flex_box}>
              <div className={`${styles.logistics_model} ${styles.flex}`}>
                <img
                  className={`${styles.logistics_image} ${
                    styles.normal_transition
                  }`}
                  src={Logistics1}
                  alt="Logistics1"
                />
                <div className={styles.logistics_cen}>
                  <p
                    className={`${styles.logistics_cen_title} ${
                      styles.normal_transition
                    }`}
                  >
                    智慧庄园
                  </p>
                  <p
                    className={`${styles.logistics_cen_line} ${
                      styles.normal_transition
                    }`}
                  >
                    <span />
                  </p>
                  <p
                    className={`${styles.logistics_cen_msg} ${
                      styles.logistics_cen_loacltion
                    } ${styles.normal_transition}`}
                  >
                    利用物联网、人工智能等科技服务进行园区信息化、智能化和网络化升级，让园区管理更加可视、安全和高效，让园区资产不断升值。链接更多共享资源，丰富园区生态，让租户更满意。
                  </p>
                  <a
                    className={`${styles.logistics_cen_button} ${
                      styles.logistics_cen_loacltion
                    } ${styles.normal_transition}`}
                  >
                    查看详情 >
                  </a>
                </div>
              </div>
              <div className={`${styles.logistics_model} ${styles.flex}`}>
                <img
                  className={`${styles.logistics_image} ${
                    styles.normal_transition
                  }`}
                  src={Logistics2}
                  alt="Logistics2"
                />
                <div className={styles.logistics_cen}>
                  <p
                    className={`${styles.logistics_cen_title} ${
                      styles.normal_transition
                    }`}
                  >
                    新型能源
                  </p>
                  <p
                    className={`${styles.logistics_cen_line} ${
                      styles.normal_transition
                    }`}
                  >
                    <span />
                  </p>
                  <p
                    className={`${styles.logistics_cen_msg} ${
                      styles.logistics_cen_loacltion
                    } ${styles.normal_transition}`}
                  >
                    新型能源是集园区充电网络、光伏储能、新能源大数据为一体的新能源运力网络，从而将传统的服务、赋能、监控新能源运力，整合成最佳新能源综合解决方案。
                  </p>
                  <a
                    className={`${styles.logistics_cen_button} ${
                      styles.logistics_cen_loacltion
                    } ${styles.normal_transition}`}
                  >
                    查看详情 >
                  </a>
                </div>
              </div>
              <div className={`${styles.logistics_model} ${styles.flex}`}>
                <img
                  className={`${styles.logistics_image} ${
                    styles.normal_transition
                  }`}
                  src={Logistics3}
                  alt="Logistics3"
                />
                <div className={styles.logistics_cen}>
                  <p
                    className={`${styles.logistics_cen_title} ${
                      styles.normal_transition
                    }`}
                  >
                    共享中心
                  </p>
                  <p
                    className={`${styles.logistics_cen_line} ${
                      styles.normal_transition
                    }`}
                  >
                    <span />
                  </p>
                  <p
                    className={`${styles.logistics_cen_msg} ${
                      styles.logistics_cen_loacltion
                    } ${styles.normal_transition}`}
                  >
                    将托盘、货架、叉车、物流分拣设备等运维融于物流枢纽中，并辐射相关周边物流货运产业及大型物流园区。实现设备的租赁、共享与运营服务。
                  </p>
                  <a
                    className={`${styles.logistics_cen_button} ${
                      styles.logistics_cen_loacltion
                    } ${styles.normal_transition}`}
                  >
                    查看详情 >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cloud_box}>
          <img
            className={`${styles.cloud_image} ${styles.normal_transition}`}
            src={LogisticsCloud}
            alt="LogisticsCloud"
          />
          <div className={styles.cloud_content}>
            <p className={styles.cloud_title}>物流云平台</p>
            <p className={styles.cloud_label}>云计算 大数据</p>
            <p className={styles.cloud_msg}>
              集合全面生态能力，提供丰富的物流数据
            </p>
            <a
              href="https://www.baidu.com"
              className={`${styles.cloud_button} ${styles.normal_transition}`}
            >
              查看详情 >
            </a>
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
