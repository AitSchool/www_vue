<template>
<div class="serve-section">
  <div class="container-lg">
    <div class="serve-list">
      <div class="serve-item">
        <div class="serve-item-left">
          <div class="serve-item-image">
            <img class="serve-item-image" src="https://cn.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-features-b/nd004-cn/features-01@1x.png">
          </div>
        </div>
        <div class="serve-item-right">
          <div class="serve-detail-list">
            <div class="serve-detail-item">
              <img class="serve-detail-image" src="https://cn.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-features-b/nd004-cn/icon-features-01.svg">
              <h3 class="serve-detail-title">系统性的课程内容，互动的教学方式</h3>
              <p class="serve-detail-desc">除了硅谷视频课程、实战项目，我们相信互动的在线学习方式能够让你更快掌握高级变成技能。即时测验、课堂练习、丰富的视频，目的都是帮助你高效学习。</p>
            </div>
            <div class="serve-detail-item">
              <img class="serve-detail-image" src="https://cn.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-features-b/nd004-cn/icon-features-02.svg">
              <h3 class="serve-detail-title">硅谷实战项目和代码审阅</h3>
              <p class="serve-detail-desc">亲自挑战来自硅谷的技术实战项目，获得领域专家的逐行代码审阅和细致反馈，学习先进的技术标准，在实战中快速提升开发能力。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="serve-item">
        <div class="serve-item-left">
          <div class="serve-detail-list">
            <div class="serve-detail-item">
              <img src="https://cn.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-features-b/nd004-cn/icon-features-04.svg" alt="" class="serve-detail-image">
              <h3 class="serve-detail-title">国际同步的学习服务</h3>
              <p class="serve-detail-desc">你将可以加入 Slack 英文社群，与来自全世界的全栈学员互相交流，拓展你的视野、走在技术前沿、认识更多朋友。</p>
            </div>
            <div class="serve-detail-item">
              <img src="https://cn.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-features-b/nd004-cn/icon-features-03.svg" alt="" class="serve-detail-image">
              <h3 class="serve-detail-title">获得纳米学位认证</h3>
              <p class="serve-detail-desc">每一位开发学员毕业后，都将获得 AitSchool 颁发的毕业证书，证明你在开发领域的专业知识和技术水平。</p>
            </div>
          </div>
        </div>
        <div class="serve-item-right">
          <div class="serve-item-image">
            <img class="serve-item-image" src="https://cn.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-features-b/nd004-cn/features-02@1x.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'plan_help',
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="less">
.serve-section{
  padding: 3rem;

  .serve-item{
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .serve-detail-list{
    display: inline-block;
    width: 680px;

    .serve-detail-item{
      position: relative;
      padding-left: 120px;
    }
    .serve-detail-image{
      position: absolute;
      top: -10px;
      left: 0;
      width: 80px;
    }
    .serve-detail-title{
      font-size: 24px;
      font-weight: 300;
      line-height: 36px;
      color: #2e3d49;
      margin-bottom: 12px;
    }
    .serve-detail-desc{
      font-size: 16px;
      font-weight: 400;
      color: #525c65;
      font-weight: 400;
      margin-bottom: 48px;
    }
  }
  .serve-item-image{
    flex: 1;
    img{
      width: 380px;
    }
  }
}
</style>
