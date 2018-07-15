<template>
<div class="market-section">
  <div class="container-lg market-container">
    <div class="market-article-container">
      <h2 class="market-article-title">零基础掌握前端开发的基本技能</h2>
      <div class="market-article-desc">
        <p>前端设计，可以将无数富有创意的想法和设计化为现实。优达学城和硅谷前端技术明星一起，手把手教你从零开始写代码。你将通过充满活力的硅谷课程内容、优质实战项目和专业代码审阅，快速掌握前端设计的基础知识和简单应用，为成为一名前端开发者打下基础。</p>
        <p>选择 AitSchool 的硅谷一站式学习曲线、符合行业需求技能图谱、专业及时学习辅导，快人一步成为抢手人才，掌握先机！</p>
        <p>免费体验课程内容，在“我的教室”中深入感受项目细节和专业辅导</p>
      </div>
      <button class="market-aritcle-btn">试听课程</button>
    </div>
    <div class="market-card-container">
      <h2 class="market-card-tite">Javascript 是全球需求第一的编程语言</h2>
      <div class="market-card-desc">
        <p>2018 全球开发者技能调查</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'plan_market',
  data () {
    return {

    }
  },
}
</script>

<style scoped lang="less">
.market-container{
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;

  .market-article-container{
    width: 590px;

    .market-article-title{
      font-size: 32px;
      font-weight: 300;
      line-height: 36px;
      margin-bottom: 24px;
      color: #02b3e4;
    }

    .market-article-desc{
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      color: #525c65;

      p{
        margin-bottom: 12px;
      }
    }

    .market-aritcle-btn{
      display: block;
      cursor: pointer;
      text-align: center;
      white-space: nowrap;
      text-decoration: none;
      vertical-align: middle;
      height: 3rem;
      padding: 0 .5rem;
      text-transform: uppercase;
      font-weight: 600;
      font-size: .8125rem;
      line-height: 2.625rem;
      border-radius: .25rem;
      letter-spacing: .125rem;
      transition: all .3s ease;
      width: 13.75rem;
      color: #fff;
      background-color: #02b3e4;
      border: .125rem solid transparent;
      box-shadow: 8px 10px 20px 0 rgba(46,61,73,.15);
      margin-top: 40px;
      &:hover{
        border-color: transparent;
        background-color: #029fcb;
        box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      }
    }
  }

  .market-card-container{
    max-width: 300px;
    text-align: left;
    position: relative;
    box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
    border-radius: .375rem;
    transition: all .3s ease;
    background: #fff;
    box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
    border-top: 3px solid #02b3e4;
    min-height: 15rem;
    padding: 2.25rem;

    .market-card-tite{
      font-size: 24px;
      font-weight: 400;
      line-height: 36px;
      margin-bottom: 12px;
      color: #02b3e4;
    }

    .market-card-desc{
      font-size: .8125rem;
      line-height: 1.5rem;
      letter-spacing: .125rem;
      text-transform: uppercase;
      font-weight: 600;
      color: #7d97ad;
    }
  }
}
</style>
