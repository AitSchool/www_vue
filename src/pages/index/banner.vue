<template>
    <div class="banner-section">
        <div class="mask" style="height:100%;background:rgba(0,0,0,.5)">
            <div class="container">
                <div class="banner-info">
                    <h1>AitSchool -- 技术成就梦想之美</h1>
                    <h2>互联网核<span class="opacity">心</span>技能进阶</h2>
                    <p>相比于“获取知识”，我们更关注你切实获得<span class="yellow">“能力提升”</span></p>
                </div>
                <Atom :size="80" class="atom-logo"></Atom>
            </div>
        </div>
    </div>
</template>

<script>
import Atom from '@/components/Atom-logo.vue'

export default {
    name: 'index_banner',
    data () {
        return {
            
        }
    },
    components: {
        Atom,
    }

}
</script>

<style scoped lang="less">
    .banner-section{
        height: 440px;
        background-color: rgba(255, 255, 255, .2);
        background-image: url('./../../assets/images/banner-hero1.jpg');
        background-size: cover;
        margin-bottom: 20px;
        text-align: center;
        
        .container{
            position: relative;
            height: 100%;
        }


        .banner-info{
            padding-top: 70px;
            
            h1{
                width: 365px;
                margin: 0 auto;
                line-height: 50px;
                border-top: 1px solid #fff;
                border-bottom: 1px solid #fff;
                color: #fff;
                font-size: 22px;
                text-align: center;
                font-weight: 300;
                letter-spacing: 2px;
                opacity: .8;
                transform: scale(.8);
            }

            h2{
                margin-top: 38px;
                font-size: 46px;
                font-weight: 300;
                color: #fff;
                letter-spacing: 3px;
                opacity: .9;

                .opacity{
                    margin: 0 20px;
                    opacity: .1;
                }
            }

            p{
                margin-top: 40px;
                font-size: 18px;
                color: #fff;
                letter-spacing: 4px;
                opacity: .9;
                
                .yellow{
                    color: #f9de07;
                }

                .red{
                    color: #8a3c3c;
                }
            }
        }
    }

    .atom-logo{
        position: absolute!important;
        bottom: 210px;
        left: 50%;
        margin-left: -40px;
        opacity: 1;
    }
</style>
