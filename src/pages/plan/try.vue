<template>
<div class="try-section">
  <div class="container">
    <h4>名额有限！抢完即止</h4>
    <div class="progress-list">
      <div class="progress-item">1. 预定超值 7 天试学</div>
      <div class="progress-item">2. 试学通过优先获得正式课程席位</div>
      <div class="progress-item">3. 毕业获得认证，实现理想改变未来</div>
    </div>
    <div class="try-content">
      <div class="card-insert">
        <h6 class="card-tips">开放预定中！</h6>
        <p class="card-title">Web前端编程基础 7 天试学班</p>
        <div class="card-price-container">
          <span class="card-total-price">¥12800</span>
          <span class="card-try-price">¥599</span>
        </div>
        <ul class="card-desc-list">
          <li>提前超值体验正式课程和辅导</li>
          <li>掌握硅谷技术学习方法</li>
          <li>完成第一个 Web 实战作品</li>
        </ul>
        <a href="javascript:;" class="card-btn">试听课程</a>
      </div>
      <div class="question-list">
        <div class="question-item">
          <p class="question-title">为什么需要试学？不能直接加入吗？</p>
          <p class="question-desc">正式加入前，我们希望让你在真实教室提前体验正式课程和辅导，完成自己的第1个编程实战项目，判断课程是否适合自己，提前掌握在线学习方法。</p>
        </div>
        <div class="question-item">
          <p class="question-title">为什么课程席位有限，需要预定？</p>
          <p class="question-desc">在课程中，除硅谷独家内容和实战项目外，你还将获得专业导师的每日督学和及时答疑支持，为保障辅导质量，我们每期只能提供有限的课程席位。</p>
        </div>
        <div class="question-item">
          <p class="question-title">试学班学费是否可以抵扣正式学费？</p>
          <p class="question-desc">在你通过试学班项目后，试学班学费可以抵扣后续加入正式课程的学费，你还有机会获得额外的“行动力奖学金”红包！</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'plan_try',
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="less">
.try-section{
  padding: 6rem 0;
  background: url('https://cn.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-overview/svip-bg.jpg') center center/contain no-repeat;

  h4{
    font-size: 32px;
    font-weight: 300;
    color: #2e3d49;
    margin-bottom: 64px;
    line-height: 36px;
    text-align: center;
  }

  .progress-list{
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(46,60,73,.05);
    border: 1px solid #dbe2e8;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 600;
    color: #2e3d49;
    margin-bottom: 40px;
    display: flex;

    .progress-item{
      position: relative;
      flex: 1;
      line-height: 34px;
      padding: 16px;
      text-align: center;

      &:not(:first-child) {
        border-left: 1px solid #dbe2e8;

        &:after{
          position: absolute;
          top: 50%;
          right: 0;
          bottom: 0;
          left: -.3em;
          background-color: #fff;
          width: .6em;
          height: .6em;
          -webkit-transform: translateY(-50%) rotate(-45deg);
          transform: translateY(-50%) rotate(-45deg);
          content: '';
          border-right: 1px solid #dbe2e8;
          border-bottom: 1px solid #dbe2e8;
        }

      }
    }
  }

  .try-content{
    display: flex;

    .card-insert{
      position: relative;
      width: 300px;
      padding: 48px 36px;
      background: #fff;
      box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
      border-radius: .375rem;
      transition: all .3s ease;

      .card-tips{
        position: absolute;
        left: -.125rem;
        top: .75rem;
        line-height: 28px;
        padding: 0 12px;
        color: #02b3e4;
        background-color: rgba(145,218,238,.3);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 2px;
        line-height: 28px;

        &:after{
          position: absolute;
          content: '';
          top: 0;
          width: 0;
          height: 0;
          right: -1rem;
          border-style: solid;
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
          border-width: 1.75rem 1rem 0 0;
          border-color: rgba(145,218,238,.3) transparent transparent;
        }
      }

      .card-title{
        font-size: 18px;
        font-weight: 600;
        line-height: 32px;
        font-weight: 600;
        text-align: center;
      }

      .card-price-container{
        height: 80px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: baseline ;
        border-bottom: 2px solid #02b3e4;
        margin-bottom: 24px;
        .card-total-price{
          color: #7d97ad;
          font-size: 27px;
          text-decoration-line: line-through;
          margin-right: 10px;
        }
        .card-try-price{
          color: #02b3e4;
          font-size: 39px;
        }
      }

      .card-desc-list{
        li{
          font-size: 16px;
          color: #525c65;
          font-size: 400;
          line-height: 32px;
        }
      }

      .card-btn{
        display: block;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        height: 3rem;
        padding: 0 .5rem;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 16px;
        line-height:48px;
        height: 48px;
        border-radius: .25rem;
        letter-spacing: .125rem;
        transition: all .3s ease;
        color: #fff;
        background-color: #02b3e4;
        border: .125rem solid transparent;
        box-shadow: 8px 10px 20px 0 rgba(46,61,73,.15);
        margin-top: 24px;
        &:hover{
          border-color: transparent;
          background-color: #029fcb;
          box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
        }
      }
    }
    .question-list{
      padding-top: 20px;
      margin-left: 50px;
      width: 580px;
      font-weight: 400;

      .question-title{
        font-size: 24px;
        margin-bottom: 12px;
        line-height: 36px;
        color: #2e3d49;
      }

      .question-desc{
        font-size: 16px;
        color: #525c65;
        line-height: 28px;
        margin-bottom: 24px;
      }
    }
  }
}
</style>
