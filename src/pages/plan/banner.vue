<template>
<div>
  <div class="banner-section">
    <div class="container-lg">
        <div class="video-container">
          <video id="planPageBannerVideo" class="video" autoplay="autoplay" loop="loop">
            <source src="https://s3.cn-north-1.amazonaws.com.cn/static-assets/video-bg-nd089.mp4">
          </video>
          <div class="course-container">
            <div class="contain">
              <h6 class="course-tips">Web前端工程师职业编程 纳米学位项目</h6>
              <h1 class="course-title">掌握 IT 编程基础，抢先成为稀缺人才</h1>
              <h5 class="course-desc">硅谷知识图谱+专业及时辅导，助你一站式高效入门编程开发</h5>
              <div class="status-list">
                <div class="status-item">
                  <h6 class="status-item-name">本期课程</h6>
                  <p class="status-item-info">已报满</p>
                </div>
                <div class="status-item">
                  <h6 class="status-item-name">下期开课时间</h6>
                  <p class="status-item-info">8 月 6 日</p>
                </div>
                <div class="status-item">
                  <h6 class="status-item-name">本周大纲下载人数</h6>
                  <p class="status-item-info">5540</p>
                </div>
              </div>
              <div class="btn-wrapper">
                <button class="btn btn-primary" v-if="!is_buy">有席位时通知我</button>
                <button class="btn btn-default" v-if="!is_buy">免费获取课程大纲</button>
                <button class="btn btn-primary" v-if="is_buy">马上学习</button>
              </div>
              <div class="couser-info" v-if="!is_buy">席位有限，立即行动！抢先掌握稀缺技术，成为抢手人才</div>
              <div class="couser-info" v-if="is_buy">您已报名，翻滚吧，少年！</div>
              <div class="icon-flag" v-if="!is_buy">新课首发!</div>
              <div class="abs-bottom-tips" v-if="!is_buy">本期席位已抢完，下期即将开放，抢先免费试听！</div>
            </div>
          </div>
        </div>
    </div>
  </div>
  <div class="planInfo-section">
    <div class="container-lg">
      <div class="info-list">
        <div class="info-item">
          <h6 class="info-item-name">难度</h6>
          <h5 class="info-item-title">零基础</h5>
        </div>
        <div class="info-item">
          <h6 class="info-item-name">学习时间</h6>
          <h5 class="info-item-title">约 4 个月</h5>
          <p class="info-item-desc">按每周 100 小时预估</p>
        </div>
        <div class="info-item">
          <h6 class="info-item-name">2017 岗位平均月薪</h6>
          <h5 class="info-item-title">1.58 万</h5>
          <p class="info-item-desc">数据来自BOSS直聘</p>
        </div>
        <div class="info-item">
          <h6 class="info-item-name">主要语言</h6>
          <h5 class="info-item-title">HTML & CSS & JavaScript</h5>
          <p class="info-item-desc">项目审阅和服务</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'plan_banner',
  props: {
    is_buy: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {

    }
  },
  mounted () {
    // let video = document.getElementById('planPageBannerVideo');
  }
}
</script>

<style scoped lang="less">
.banner-section{
  .video-container{
    height: 624px;
    background-image: url('https://cn.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-hero-video/video-bg-nd089-cn-trial.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 5px 5px 25px 0 rgba(46,61,73,.4);
    border-radius: .375rem;
    overflow: hidden;

    .video{
      height: 100%;
      width: 100%;
    }
  }

  .course-container{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    &:before{
      content: '';
      background: #000;
      opacity: .3;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: .375rem;
      z-index: -1;
    }

    .contain{
      padding-top: 64px;
      text-align: center;
      color: #fff;
    }

    .course-tips{
      font-size: .8125rem;
      line-height: 1.5rem;
      letter-spacing: .125rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    .course-title{
      letter-spacing: 5px;
      font-size: 2.5rem;
      font-weight: 300;
      line-height: 3rem;
      margin-bottom: 1.5rem;
    }
    .course-desc{
      font-size: 1.125rem;
      line-height: 2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;

    }
    .status-list{
      display: flex;

      .status-item{
        flex: 1;
        height: 90px;
      }
      .status-item-name{
        font-size: 1.125rem;
        line-height: 2rem;
        font-weight: 300;
      }
      .status-item-info{
        font-size: 1.75rem;
        line-height: 2.25rem;
        font-weight: 600;
      }
    }

    .btn-wrapper{
      margin: 12px 0;

      .btn{
        display: inline-block;
        width: 280px;
        height: 48px;
        border-radius: .375rem;
        margin: 1em auto;
        border: .125rem solid transparent;
        cursor: pointer;
        outline: none;
        transition: all .2s ease;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 2px;
        line-height: 48px;
      }

      .btn-primary{
        background-color: #02b3e4;
        color: #fff;
      }

      .btn-default{
        background-color: #fff;
        color: #02b3e4;
        margin-left: 20px;
      }
    }

    .couser-info{
      font-size: 1.125rem;
      line-height: 2rem;
      color: #bcc9d4;
    }

    .icon-flag{
      position: absolute;
      top: 0;
      left: 0;
      font-size: 13px;
      letter-spacing: 2px;
      font-weight: 600;
      margin-top: 32px;
      margin-left: -14px;
      height: 50px;
      width: 122px;
      line-height: 28px;
      padding: .5rem 0 0 4rem;
      text-align: left;
      background-image: url('https://cn.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-hero-video/icon-new-flag.svg');
    }

    .abs-bottom-tips{
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      font-weight: 600;
      color: #7d97ad;
      letter-spacing: 2px;
      font-size: 12px;
    }
  }
}

.planInfo-section{
  padding: 3rem 0;

  .info-list{
    display: flex;
  }
  .info-item{
    flex: 1;
    height: 80px;
    border-left: 1px solid #dbe2e8;
    padding-left: 20px;
    &:first-child{
      border-left: none;
    }
  }

  .info-item-name{
    font-size: 13px;
    line-height: 1.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
    color: #7d97ad;
  }

  .info-item-title{
    font-size: 18px;
    font-weight: 600;
    line-height: 2rem;
    color: #2e3d49;
  }

  .info-item-desc{
    font-size: 13px;
    line-height: 24px;
    color: #525c65;
    font-weight: 400;
  }
}

</style>
