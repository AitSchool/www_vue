<template>
    <div class="serve-section">
        <div class="container-lg">
            <ul class="serve-list">
                <li class="serve-item" href="https://www.prodegree.com" target="_blank">
                  <div class="serve-item-image">
                    <img src="https://cn.udacity.com/assets/iridium/images/shared/icons/icon-nanodegree.svg">
                  </div>
                  <div class="serve-item-content">
                    <p class="serve-item-title blue">职业学位</p>
                    <p class="serve-item-desc">为职场人提供专业的职业技能认证</p>
                    <p class="serve-item-desc">BAT一线工程师，一对一电测，获取专业技能证书</p>
                  </div>
                </li>
                <li class="serve-item" href="https://www.toppro.io" target="_blank">
                  <div class="serve-item-image">
                    <img src="https://cn.udacity.com/assets/iridium/images/shared/icons/icon-courses.svg">
                  </div>
                  <div class="serve-item-content">
                    <p class="serve-item-title green">旅行办公</p>
                    <p class="serve-item-desc">工作，还有诗和远方</p>
                    <p class="serve-item-desc">按需雇佣顶尖专业人才，企业级人才资源服务平台</p>
                  </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index_serve',
    data () {
        return {

        }
    },
}
</script>

<style scoped lang="less">
.serve-section{
  background-color: #fafbfc;
  padding: 4.5rem 0;

  .serve-list{
    font-size: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .serve-item{
      display: inline-block;
      vertical-align: middle;
      width: 580px;
      height: 192px;
      background: #fff;
      position: relative;
      text-align: center;
      transition: all .5s ease;
      box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
      display: flex;
      align-items: center;
      border-radius: .375rem;
      cursor: pointer;

      &:hover{
        box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      }
    }

    .serve-item-image{
      width: 25%;
      text-align: center;

      img{
        max-width: 80%;
      }
    }

    .serve-item-content{
      width: 70%;
      text-align: left;
    }

    .serve-item-title{
      font-size: 1.5rem;
      line-height: 2.25rem;
      font-weight: 400;
      margin-bottom: 12px;

      &.blue{
        color: #02b3e4;
      }

      &.green{
        color: #15c26b;
      }
    }

    .serve-item-desc{
      font-size: .875rem;
      line-height: 1.5rem;
      color: #525c65;
      font-weight: 400;
    }
  }
}
</style>
