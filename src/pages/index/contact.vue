<template>
    <div class="contact-section">
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

    .contact-section{
        background: url('./../../assets/images/github_rock.svg') no-repeat;
        // background-color: #2c2a2b;
        // margin-top: 70px;
        background-position: calc(50% + 380px) 60px;
        padding-top: 200px;
        padding-bottom: 200px;

        .about-us,.touch-us{
            display: inline-block;
            vertical-align: top;
            width: 365px;
            // color: #efdab9;
            color: #3f464b;
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
                // color: #ffd152;
                margin-bottom: 5px;
                span{
                    display: inline-block;
                    width: 60px;
                    // color: #efdab9;
                }
            }
        }
    }
</style>
