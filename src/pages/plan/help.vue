<template>
<div class="help-section">
  <div class="container-lg">
    <h3 class="help-title">帮助与常见问题</h3>
    <p class="help-tips">课程特点</p>
    <a href="javascript:;" class="help-more-btn">查看更多问题</a>
    <div class="help-list">
      <div class="help-item">
        <p class="help-item-title">AitSchool 的前端开发课程有什么优势？</p>
        <p class="help-item-desc">AitSchool 的前端开发课程是来自和 Google x GitHub ，资深前端技术导师将亲自带你从零开始，逐步成长为一名卓越的前端开发者，能够帮助你成功应聘一流企业的前端开发岗位。</p>
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
.help-section{
  padding: 6rem 0;
  .help-title{
    font-size: 32px;
    line-height: 36px;
    font-weight: 300;
    color: #525c65;
    margin-bottom: 24px;
  }
  .help-tips{
    font-weight: 600;
    font-size: 13px;
    color: #7d97ad;
    letter-spacing: 2px;
    margin-bottom: 24px;
  }
  .help-list{
    width: 980px;
  }
  .help-item-title{
    color: #2e3d49;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 26px;
  }
  .help-item-desc{
    font-size: 16px;
    line-height: 28px;
    color: #525c65;
  }
  .help-more-btn{
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 220px;
    height: 48px;
    cursor: pointer;
    font-weight: 600;
    font-size: 13px;
    line-height: 48px;
    text-align: center;
    border-radius: 4px;
    letter-spacing: 2px;
    transition: all .3s ease;
    color: #fff;
    background-color: #7d97ad;
    border: 2px solid transparent;
    box-shadow: 8px 10px 20px 0 rgba(46,61,73,.15);

    &:hover{
      box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
    }
  }
}
</style>
