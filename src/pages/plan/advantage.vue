<template>
<div class="advantage-section">
  <div class="cadv-secton">
    <div class="container-lg">
      <h2>专业高效技术成长路径</h2>
      <div class="cadv-list">
        <div class="cadv-item">
          <p class="cadv-item-tips">内容、老师不专业浪费时间精力</p>
          <img class="cadv-item-image" src="https://cn.udacity.com/assets/iridium/images/ndPromoGroup/silicon_valley_course1.png">
          <p class="cadv-item-title">学硅谷名企认可官方课程</p>
          <p class="cadv-item-desc">师从行业领袖，选择权威高速学习路径</p>
        </div>
        <div class="cadv-item">
          <p class="cadv-item-tips">只看视频纸上谈兵</p>
          <img class="cadv-item-image" src="https://cn.udacity.com/assets/iridium/images/ndPromoGroup/silicon_valley_course2.png">
          <p class="cadv-item-title">挑战实战掌握前沿应用</p>
          <p class="cadv-item-desc">动手做领先公司真实案例，真正掌握技术</p>
        </div>
        <div class="cadv-item">
          <p class="cadv-item-tips">孤军奋战容易拖延</p>
          <img class="cadv-item-image" src="https://cn.udacity.com/assets/iridium/images/ndPromoGroup/silicon_valley_course3.png">
          <p class="cadv-item-title">小班每日监督辅导加速成长</p>
          <p class="cadv-item-desc">加入约16人小班，享受细致辅导及时答疑</p>
        </div>
      </div>
    </div>
  </div>
  <div class="sadv-section">
    <div class="container-lg">
      <h2>纳米学员更多特权</h2>
      <div class="sadv-list">
        <div class="sadv-item">
          <img class="sadv-item-image" src="https://cn.udacity.com/assets/iridium/images/ndPromoGroup/icon1.png">
          <p class="sadv-item-title">定制学习路径</p>
        </div>
        <div class="sadv-item">
          <img class="sadv-item-image" src="https://cn.udacity.com/assets/iridium/images/ndPromoGroup/icon2.png">
          <p class="sadv-item-title">逐行代码审阅</p>
        </div>
        <div class="sadv-item">
          <img class="sadv-item-image" src="https://cn.udacity.com/assets/iridium/images/ndPromoGroup/icon3.png">
          <p class="sadv-item-title">结识菁英同学</p>
        </div>
        <div class="sadv-item">
          <img class="sadv-item-image" src="https://cn.udacity.com/assets/iridium/images/ndPromoGroup/icon4.png">
          <p class="sadv-item-title">硅谷&名企认证</p>
        </div>
        <div class="sadv-item">
          <img class="sadv-item-image" src="https://cn.udacity.com/assets/iridium/images/ndPromoGroup/icon6.png">
          <p class="sadv-item-title">助教直播答疑</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'plan_advantage',
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="less">
.advantage-section{
  padding: 3rem 0;

  h2{
    font-size: 32px;
    font-weight: 300;
    line-height: 36px;
    margin-bottom: 60px;
    text-align: center;
  }

  .cadv-list{
    display: flex;
    justify-content: space-between;

    .cadv-item{
      width: 370px;
      text-align: center;
      margin-bottom: 1.5rem;
      border-radius: 6px;
      box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
    }
    .cadv-item-tips{
      color: #7d97ad;
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.78;
      margin: 2.5rem 0 1rem;
      text-decoration: line-through;
    }
    .cadv-item-image{
      height: 150px;
    }
    .cadv-item-title{
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      color: #2e3d49;
      margin-bottom: 4px;
    }
    .cadv-item-desc{
      color: #525c65;
      margin-bottom: 2.5rem;
      padding: 0 1rem;
    }
  }

  .sadv-section{
    padding-top: 6rem;
  }

  .sadv-list{
    display: flex;
    justify-content: space-between;

    .sadv-item{
      width: 200px;
      text-align: center;
    }
    .sadv-item-image{
      height: 120px;
    }
    .sadv-item-title{
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      color: #2e3d49;
      margin-bottom: 24px;
    }
  }
}
</style>
