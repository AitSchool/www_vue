<template>
    <div class="plan-section" v-show="showPlan.length">
        <div class="container-lg">
            <h2>学习计划</h2>
            <div class="card-list">
              <div class="card-item"  v-for="(plan, index ) in showPlan" >
                <div class="card-item-header"
                  :style="{ backgroundImage: 'url('+backgroundImage[index].url+')' }">
                  <div class="card-header-mask" :style="{ backgroundColor: backgroundImage[index].color }">
                    <h3 class="card-header-title">{{plan.name}}</h3>
                  </div>
                </div>
                <div class="card-item-body">
                  <!-- 信息 -->
                  <img class="card-item-img" :src="plan.image_path" :alt="plan.name" :title="plan.name">
                  <!-- 状态 -->
                  <p class="card-item-desc">
                    <span class="tag red" v-if="plan.status === 1 && myplan.includes(plan.id)">继续学习</span>
                    <span class="tag red" v-else-if="plan.status === 1">马上学习</span>
                    <span class="tag gray" v-else="plan.status === 2">敬请期待</span>
                  </p>
                </div>

                <!-- 链接 -->
                <router-link v-if="plan.status === 1" class="link" :to="{ name:'plan_page',params: { id: plan.id}}" >
                </router-link>
              </div>
            </div>
            <div class="more-plan">
              <a v-if="plans.length !== showPlan.length" @click="showMorePlan" href="javascript:;">查看全部纳米学位项目<span class="icon__arrow--white"></span></a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'index_plan',
    mounted () {
      this.showPlan = this.plans.slice(0,6);
    },
    props: {
        plans: {
            type: Array,
            default: []
        },
        myplan: {
            type: Array,
            default: []
        },
    },
    data () {
        return {
            showPlan: [],
            plansMock:[{
                id:1,
                name:'WEB工程师',
                status:1,
                self_status:1,
                image_path:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/4cdffb64-3d45-49f3-84c3-60f2349a25c2.png',
                background_image: 'https://d125fmws0bore1.cloudfront.net/assets/shared/nd-cards/nd001@2x-3cc1a1253388bb5439fa3e2f53dbb73b510ddb4c94ab7b2819c2a3f75c0e98ac.jpg',
                background_color: 'rgba(255,162,52,.8)',
            }],
            backgroundImage:[{
              name: '前端工程师',
              url: 'https://d125fmws0bore1.cloudfront.net/assets/shared/nd-cards/nd001@2x-3cc1a1253388bb5439fa3e2f53dbb73b510ddb4c94ab7b2819c2a3f75c0e98ac.jpg',
              color: 'rgba(255,162,52,.8)'
            },{
              name: '自然语言处理工程师',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd892.jpg',
              color: 'rgba(125,151,173,.8)'
            },{
              name: '微信小程序开发',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd666-cn.jpg',
              color: 'rgba(125,151,173,.8)'
            },{
              name: '无人驾驶入门',
              url:'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd113.jpg',
              color: 'rgba(2,179,228,.8)',
            },{
              name: '人工智能编程基础',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd089.jpg',
              color: 'rgba(2,204,186,.8)'
            },{
              name: '机器学习工程师',
              url: 'https://d125fmws0bore1.cloudfront.net/assets/shared/nd-cards/nd009@2x-9f2d8b6e86c96a3140f3a9aac20869f374bdbb6481acad24cefd5db56dc8c999.jpg',
              color: 'rgba(169,81,237,.8)'
            },{
              name: '计算机视觉工程师',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd891.jpg',
              color: 'rgba(255,162,52,.8)'
            },{
              name: '深度学习',
              url: 'https://d125fmws0bore1.cloudfront.net/assets/shared/nd-cards/nd101@2x-5ed1d6680baf0bb53f9286c5cda65c7c8cc0072538eaa5f0dcfcd9dc97724c77.jpg',
              color: 'rgba(255,84,131,.8)'
            },{
              name: '数据分析师',
              url: 'https://d125fmws0bore1.cloudfront.net/assets/shared/nd-cards/nd002@2x-6b20bbee6ff1e6cf86edeac865dd857421588005b35d8d30a2ebb2a87f078127.jpg',
              color: 'rgba(2,204,186,.8)'
            },{
              name: '数据科学家',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd025.jpg',
              color: 'rgba(169,81,237,.8)'
            },{
              name: '商业数据分析',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd100-cn.jpg',
              color: 'rgba(125,151,173,.8)'
            },{
              name: '无人驾驶工程师',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd013.jpg',
              color: 'rgba(255,84,131,.8)'
            },{
              name: '人工智能工程师',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd898.jpg',
              color: 'rgba(2,179,228,.8)'
            },{
              name: 'Python 编程入门',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd000.jpg',
              color: 'rgba(169,81,237,.8)'
            },{
              name: 'Java 入门',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd301-cn-basic.png',
              color: 'rgba(255,162,52,.8)'
            },{
              name: '产品设计冲刺方法',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd201.jpg',
              color: 'rgba(255,84,131,.8)'
            },{
              name: 'Google AdWords',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd124.jpg',
              color: 'rgba(2,204,186,.8)'
            },{
              name: '互联网营销',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd018-cn.jpg',
              color: 'rgba(2,179,228,.8)'
            },{
              name: '机器人开发',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd209.jpg',
              color: 'rgba(2,204,186,.8)'
            },{
              name: '飞行汽车开发',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd787.jpg',
              color: 'rgba(169,81,237,.8)'
            },{
              name: 'React 开发者',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd019.jpg',
              color: 'rgba(125,151,173,.8)'
            },{
              name: '全栈开发工程师',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd004.jpg',
              color: 'rgba(255,162,52,.8)'
            },{
              name: '虚幻引擎 VR 游戏开发',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd117.jpg',
              color: 'rgba(255,84,131,.8)'
            },{
              name: 'VR 开发者',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd017.jpg',
              color: 'rgba(2,204,186,.8)'
            },{
              name: '区块链工程师',
              url: 'https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd1309.jpg',
              color: 'rgba(169,81,237,.8)'
            },]
        }
    },
    methods: {
      showMorePlan: function() {
        this.showPlan = this.plans
      }
    }
}
</script>

<style scoped lang="less">
.plan-section{

  h2{
    padding-top: 3rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.25rem;
    color: #02b3e4;
  }

  .card-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .card-item{
      position: relative;
      height: 360px;
      width: 348px;
      text-align: left;
      background: #fff;
      border-radius: .375rem;
      transition: all .3s ease;
      margin-top: 3rem;
      overflow: hidden;
      box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);

      &:hover{
        box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      }
  }

  .card-item-header{
    position: relative;
    height: 156px;
    border-top-left-radius: .375rem;
    border-top-right-radius: .375rem;
    overflow: hidden;
    background-size: cover;
    background-image: url('https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd1309.jpg');

    .card-header-mask{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(169,81,237,.8);
    }

    .card-header-title{
      font-weight: 400;
      padding-top: 2.5em;
      padding-left: 1.5em;
      color: #fff;
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
  }

  .card-item-body{
    position: relative;
    padding: 24px 32px;

    &:before {
        width: 23px;
        height: 11px;
        content: '';
        position: absolute;
        top: 6px;
        right: 6px;
        background-image: url('./../../assets/images/index/index_zhiye_protag.png');
        background-size: 23px 11px;
    }

    .card-item-img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: .2;
      z-index: 0;
    }

    .card-item-desc{
      position: relative;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      line-height: 1.75rem;
      color: #525c65;
      font-weight: 400;

      .tag{
        display: inline-block;
        background: #02b3e4;
        color: #fff;
        padding: 0 1rem;
        vertical-align: middle;
        &.gray{
          background: rgba(0, 0, 0, 0.4);
        }
        &.red{
          background: #ff5483;
        }
      }
    }
  }

  .link{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .more-plan{
    text-align: right;
    padding: 3rem 0;
    font-size: 1.5rem;
    line-height: 2.25rem;
    a{
      color: #02b3e4;
    }
    .icon__arrow--white{
      background: url('https://cn.udacity.com/assets/iridium/images/homepage/shared/icons/icon-arrow-right-white.svg') center center/22% no-repeat #02b3e4;
      background-position: 25px center;
      margin-left: 1.5rem;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      margin-left: .75rem;
      transition: box-shadow .3s ease;
      box-shadow: 8px 10px 20px 0 rgba(46,61,73,.15);
      &:hover{
        box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      }
    }
  }
}
</style>
