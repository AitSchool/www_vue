<template>
  <div>
    <div class="contact-section">
      <div class="container-lg">
        <div class="contact-section-content">
          <h4 class="contact-title">联系我们</h4>
          <p class="contact-desc">如果你有任何问题，我们将为你解答。如果你需要任何帮助，我们将提供协助。请随时联系我们！</p>
          <button class="contact-btn">联系我们</button>
        </div>
      </div>
    </div>
    <div class="aboutus-section">
      <div class="container">
          <img class="hero-octonaut" src="./../../assets/images/github_octonaut.svg">
          <div class="about-us">
              <h3>关于我们</h3>
              <div class="desc">
                  我们相信开源的力量，相信聚群的力量，<br>
                  我们憧憬着用最彻底的方式做出我们心中最理想教育模式。<br>
                  从心出发，未来快乐！<br>
                  <a target="_blank" href="https://shimo.im/docs/dBTdo7hVHFAJz9dn"
                      style="font-size: 12px;line-height: 50px;color: #02b3e4;"
                  >
                      了解更多 >>
                  </a>
              </div>
          </div>
          <div class="touch-us">
              <h3>联系我们</h3>
              <ul>
                  <li><span>电话</span>13502222677</li>
                  <li><span>地址</span>广州增城健生西路19号扎克斯宇宙中心</li>
              </ul>
          </div>
          <div class="employment">
              <a class="e_link" href="javascript:;">
                  <div class="employ_entrances">正在招聘</div>
              </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'index_contact',
    data () {
        return {

        }
    },
}
</script>

<style scoped lang="less">

.contact-section{
  background: url('https://cn.udacity.com/assets/iridium/images/homepage/shared/bg-contact.jpg') center center/cover no-repeat;
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
      color: #fff;
      background-color: #02b3e4;
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

.hero-octonaut{
    position: absolute;
    top: -150px;
    left: 0;
    width: 60px;
    // animation: hero-octonaut 2s alternate ease-in-out infinite;
    will-change: transform;
    -webkit-user-select: none;
    user-select: none;
}

@keyframes hero-octonaut{
    0%{
        transform: translateY(-8px);
    }
    100%{
        transform: translateY(8px);
    }

}

.employment{
    position: absolute;
    top: -69px;
    right: 174px;

    >a{
        display: block;
    }


    .employ_entrances {
        width: 96px;
        height: 28px;
        background: #dd5e6e;
        border-radius: 3px;
        text-align: center;
        line-height: 28px;
        font-size: 16px;
        color: #fff;
        font-weight: 400;
        letter-spacing: 2px;
        transform: skew(-10deg);
        -ms-transform: skew(-10deg);
        -moz-transform: skew(-10deg);
        -o-transform: skew(-10deg);
        box-shadow: 6px 5px 0 rgba(221, 94, 110, 0.3);
        transition: all ease .3s;

        &:before,&:after{
            position: absolute;
            width: 1px;
            height: 50px;
            background: #ecbc6c;
            content: ''
        }

        &:before{
            top: -42px;
            left: 26px;
            transform: rotateZ(45deg);
        }

        &:after{
            top: -42px;
            right: 32px;
            transform: rotateZ(-45deg);

        }

        &:hover{
            background: #eb6375;
            box-shadow: 4px 3px 0 rgba(221, 94, 110, 0.3);
            transition: all ease .3s;
        }
    }
}



.aboutus-section{
    background: url('./../../assets/images/github_rock.svg') no-repeat;
    background-color: #2c2a2b;
    background-position: calc(50% + 380px) 60px;
    padding-top: 200px;
    padding-bottom: 200px;

    .about-us,.touch-us{
        display: inline-block;
        vertical-align: top;
        width: 365px;
        color: #efdab9;
        // color: #3f464b;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: .5px;


        h3{
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 20px;
        }
    }

    .about-us{
        margin-right: 65px;
        width: 450px;
        .desc{
            text-align: justify;
        }
    }

    .touch-us{
        li{
            color: #ffd152;
            margin-bottom: 5px;
            span{
                display: inline-block;
                width: 60px;
                color: #efdab9;
            }
        }
    }
}
</style>
