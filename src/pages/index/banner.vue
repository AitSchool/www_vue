<template>
<div class="banner-section">
  <div class="container-lg">
    <div class="banner-container">
      <div class="banner-left">
        <div class="focus-content">
          <p class="focus-tips">限时 超值试学中</p>
          <h2 class="focus-title">零基础，一站式入门互联网编程研发</h2>
          <p class="focus-desc">相比于“获取知识”我们更关注你切实获得“能力提升”</p>
          <button class="focus-btn">立抢限量试学</button>
        </div>
      </div>
      <div class="banner-right">
        <div class="prod-list">
          <a class="prod-item" v-for="production in productions" :href="production.link_url" target="_blank">
            <img class="prod-item-img" :src="production.image_url">
            <div class="prod-item-content">
              <h6 class="prod-item-name" :style="'color:' + production.color">{{production.name}}</h6>
              <p class="prod-item-desc">{{production.description}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="partners__featured">
      <div class="partners__featured--image">
        <img src="https://cn.udacity.com/assets/iridium/images/homepage/shared/partners-list/logo-gray-google.svg">
      </div>
      <div class="partners__featured--image">
        <img src="https://cn.udacity.com/assets/iridium/images/homepage/shared/partners-list/logo-gray-facebook.svg">
      </div>
      <div class="partners__featured--image">
        <img src="https://cn.udacity.com/assets/iridium/images/homepage/shared/partners-list/logo-gray-amazon.svg">
      </div>
      <div class="partners__featured--image">
        <img src="https://cn.udacity.com/assets/iridium/images/homepage/shared/partners-list/logo-gray-ibm.svg">
      </div>
      <div class="partners__featured--image">
        <img src="https://cn.udacity.com/assets/iridium/images/homepage/shared/partners-list/logo-gray-github.svg">
      </div>
      <div class="partners__featured--image">
        <img src="https://cn.udacity.com/assets/iridium/images/homepage/shared/partners-list/logo-gray-tencent.svg">
      </div>
      <div class="partners__featured--image">
        <img src="https://cn.udacity.com/assets/iridium/images/homepage/shared/partners-list/logo-gray-didi.svg">
      </div>
      <div class="partners__featured--image">
        <img src="https://cn.udacity.com/assets/iridium/images/homepage/shared/partners-list/logo-gray-vive.svg">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'index_banner',
  data () {
    return {
      productions:[{
        name:'破壳计划 NOW',
        description: '编程学得好，数学英语差不了！',
        image_url: 'https://images.ctfassets.net/2y9b3o528xhq/7CSgyBKosEK848yaQgs0iY/a837dec45cdaa2289d4f0e4ac55e5858/module-sdc_2x.png',
        color: ' #02ccba',
        link_url: 'https://shimo.im/docs/d9NB9xlSo2IOvCzI'
      },{
        name:'探月计划 HOT',
        description: '编程教育，从娃娃抓起！',
        image_url: 'https://images.ctfassets.net/2y9b3o528xhq/1REhtgIcG8auQY0q8AKygm/108319e047c837e35eec5f8033e25e65/module-aind_2x.png',
        color: ' #f04546',
        link_url: 'https://shimo.im/docs/nwDduoDZ29o6Alc7'
      },{
        name:'新蕾计划 Bron2Code',
        description: '实战训练营，培养正规军！',
        image_url: 'https://images.ctfassets.net/2y9b3o528xhq/1i2NkvuCnAsQqmq8KoOWuI/86b7bf2af613280245c862eaefe513bd/module-nd-python-cn.png',
        color: ' #ffa234',
        link_url: 'https://shimo.im/docs/wgAgkqgGrFYO2ky7'
      }]
    }
  }
}
</script>

<style scoped lang="less">
.banner-section{
  padding-top: 60px;

  .banner-container{
    display: flex;
  }

  .banner-left{
    position: relative;
    width: 780px;
    height: 480px;
    background-color: rgba(46,61,73,.7);
    transition: color .3s ease;
    background-image:url('https://images.ctfassets.net/2y9b3o528xhq/4hVKbFcrJ6i40uEG6W4OWm/793fc60718521ff0373fb0aaea28e5ca/HP-DSND-Promo_2x.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: .375rem;

    .focus-content{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      color: #fff;

      .focus-tips{
        font-size: .8125rem;
        line-height: 1.5rem;
        letter-spacing: .125rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
      }

      .focus-title{
        font-size: 2rem;
        line-height: 2.25rem;
        margin-bottom: .75rem;
        font-weight: 300;
      }

      .focus-desc{
        max-width: 36.25rem;
        margin-bottom: 1.5rem;
        font-size: 1rem;
        line-height: 1.75rem;
        margin: 0 auto;
        margin-bottom: 1.5rem;
      }

      .focus-btn{
        display: block;
        margin: 0 auto;
        color: #02b3e4;
        background-color: #fff;
        width: 17.5rem;
        border: .125rem solid transparent;
        box-shadow: 8px 10px 20px 0 rgba(46,61,73,.15);
        font-weight: 600;
        font-size: .8125rem;
        line-height: 2.625rem;
        padding: 0 .5rem;
        text-align: center;
        border-radius: .25rem;
        letter-spacing: .125rem;
        transition: all .2s ease;
        cursor: pointer;
        &:hover{
          color: #fff;
          background: #02b3e4;
          font-size: 1rem;
        }
      }
    }
  }

  .banner-right{
    flex: 1;
    padding: 0 20px 0 50px;

    .prod-item{
      display: block;
      height: 144px;
      margin-bottom: 1.5rem;
      text-align: left;
      position: relative;
      background: #fff;
      box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
      border-radius: .375rem;
      transition: all .3s ease;
      overflow: hidden;
      &:hover{
        box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      }

      .prod-item-img{
        float: left;
        margin-right: .75rem;
        height: 100%;
      }

      .prod-item-content{
        padding: 24px 20px;
      }

      .prod-item-name{
        font-size: .75rem;
        line-height: 1.5rem;
        margin-bottom: .375rem;
      }

      .prod-item-desc{
        color: #2e3d49;
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }

  .partners__featured{
    opacity: .7;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    border-bottom: 1px solid rgba(0,0,0,.1);
    .partners__featured--image{
      img{
        max-height: 3.75rem;
        margin: -7px 15px;
      }
    }
  }
}
</style>
