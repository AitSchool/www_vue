<template>
<div class="advangate-section">
    <div class="container-lg">
      <h2>为什么选择未来学城？</h2>
      <div class="feature-list">
        <div class="feature-item">
          <div class="feature-item-left">
            <div class="feature-content">
              <div class="feature-item-icon">
                <img src="https://cn.udacity.com/assets/iridium/images/shared/icons/icon-bulb.svg">
              </div>
              <div class="feature-item-title">
                学Google、Facebook、亚马逊<br>
                官方课程，掌握前沿技术
              </div>
              <div class="feature-item-desc">
                学习来自硅谷的课程内容，走在世界前列，掌握机器学习、人工智能开发、数据科学等前沿技术，成为知名企业需要的关键性人才。
              </div>
            </div>
          </div>
          <div class="feature-item-right">
            <div class="feature-content">
              <div class="feature-item-images">
                <img class="shadow-right" src="https://cn.udacity.com/assets/iridium/images/shared/features/thumb-competitive-skills-fg.jpg">
                <img class="abs-right" src="https://cn.udacity.com/assets/iridium/images/shared/features/thumb-competitive-skills-bg.jpg">
              </div>
            </div>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-item-left">
            <div class="feature-content">
              <div class="feature-item-images">
                <img class="shadow-right" src="https://cn.udacity.com/assets/iridium/images/shared/features/thumb-get-hired-fg.jpg">
                <img class="abs-left" src="https://cn.udacity.com/assets/iridium/images/shared/features/thumb-get-hired-bg.jpg">
              </div>
            </div>
          </div>
          <div class="feature-item-right">
            <div class="feature-content">
              <div class="feature-item-icon">
                <img src="https://cn.udacity.com/assets/iridium/images/shared/icons/icon-badge.svg">
              </div>
              <div class="feature-item-title magenta">
                在实战中成长<br>
                获得全方位导师支持
              </div>
              <div class="feature-item-desc">
                亲手挑战硅谷名企设计的实战项目！领域专家将逐行审阅你的代码，提供专业、细致的反馈。你还将加入学习小组，和志同道合的伙伴一起，在全方位辅导和监督下高效成长。
              </div>
            </div>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-item-left">
            <div class="feature-content">
              <div class="feature-item-icon">
                <img src="https://cn.udacity.com/assets/iridium/images/shared/icons/icon-keys.svg">
              </div>
              <div class="feature-item-title purple">
                加入知名企业，获得理想工作
              </div>
              <div class="feature-item-desc">
                毕业后，你将获得 AitSchool 和合作企业共同颁发的技术水平认证，获得求职辅导，通过快速通道加入团队！目前在国内，纳米学位已获得滴滴出行、英伟达、京东、优酷、新浪、创新工场、出门问问等知名科技企业的认可。
              </div>
            </div>
          </div>
          <div class="feature-item-right">
            <div class="feature-content">
              <div class="feature-item-images">
                <img class="shadow-right" src="https://cn.udacity.com/assets/iridium/images/shared/features/thumb-impact-fg.jpg">
                <img class="abs-right" src="https://cn.udacity.com/assets/iridium/images/shared/features/thumb-impact-bg.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'index_advangate',
    data () {
      return {

      }
    },
}
</script>

<style scoped lang="less">
.advangate-section{
  padding-bottom: 4.5rem;

  h2{
    padding-top: 3rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.25rem;
    color: #02b3e4;
  }

  .feature-item{
    height: 480px;
  }
  .feature-item-left{
    float: left;
    height: 480px;
    width: 40%;
    text-align: left;
  }
  .feature-item-right{
    float: right;
    height: 480px;
    width: 40%;
    text-align: right;
  }
  .feature-content{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .feature-item-icon{
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
    text-align: center;
    margin-bottom: 1.5rem;
    img{
      max-width: 100%;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .feature-item-title{
    color: #02b3e4;
    font-size: 1.75rem;
    line-height: 2.25rem;
    font-weight: 300;
    margin-bottom: 12px;
    text-align: left;
    &.magenta {
      color: #ff5483;
    }

    &.purple {
      color: #a951ed;
    }
  }
  .feature-item-desc{
    font-size: .875rem;
    line-height: 1.5rem;
    color: #525c65;
    font-weight: 400;
    text-align: left;
  }
  .feature-item-images{
    position: relative;
    width: 70%;
    display: inline-block;

    img{
      width: 100%;
    }

    .shadow-right {
      box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
    }

    .abs-right{
      position: absolute;
      top: 60%;
      right: 60%;
    }

    .abs-left{
      position: absolute;
      top: 60%;
      left: 60%;
    }

  }
}

</style>
