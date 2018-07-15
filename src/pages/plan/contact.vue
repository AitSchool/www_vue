<template>
  <div class="contact-section">
    <div class="container-lg">
      <div class="contact-section-content">
        <h4 class="contact-title">Web前端编程基础 7 天试学班</h4>
        <p class="contact-desc">Web前端工程师 纳米学位</p>
        <button class="contact-btn">联系我们</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'plan_contact',
    data () {
        return {

        }
    },
}
</script>

<style scoped lang="less">

.contact-section{
  background: url('https://cn.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-bottom-cta-section/nd089-cn-trial.jpg') center center/cover no-repeat;
  height: 360px;
  .container-lg{
    height: 100%;
  }
  .contact-section-content{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    text-align: center;
    width: 50%;
    margin: 0 auto;

    .contact-title{
      font-size: 2.5rem;
      line-height: 3rem;
      font-weight: 300;
      margin-bottom: 24px;
    }
    .contact-desc{
      margin-bottom: 3rem;
      font-size: 1.125rem;
      line-height: 2rem;
    }
    .contact-btn{
      display: block;
      width: 13.75rem;
      height: 3rem;
      cursor: pointer;
      font-weight: 600;
      font-size: .8125rem;
      line-height: 2.625rem;
      -webkit-font-smoothing: antialiased;
      border-radius: .25rem;
      letter-spacing: .125rem;
      transition: all .3s ease;
      color: #02b3e4;
      background-color: #fff;
      border: .125rem solid transparent;
      box-shadow: 8px 10px 20px 0 rgba(46,61,73,.15);
      margin: 0 auto;
      &:hover{
        outline: 0;
        color: #fff;
        border-color: transparent;
        background-color: #029fcb;
        box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      }
    }
  }
}
</style>
