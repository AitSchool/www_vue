<template>
    <div class="story-section">
        <div class="container">
            <h2>成长故事</h2>
            <ul class="story-list">
                <li>
                    <div class="item-image">
                        <img src="./../../assets/images/github_default_avatar.png">
                    </div>
                    <p class="name">潘雅斯</p>
                    <p class="desc">毕业后就职业广州农业银行四年，零基础转行前端程序媛。在追逐的路上，现实和压力会束缚你前进的步伐，重要的是有没有一颗跳动的坚持的内心。</p>
                    <a class="add-one" href="javascript:;">加入新蕾计划，和 ta 做同学</a>
                </li>
                <li>
                    <div class="item-image">
                        <img src="./../../assets/images/github_default_avatar.png">
                    </div>
                    <p class="name">董一</p>
                    <p class="desc">留美本科，就职于500强金融外企。被互联网技术发展前景所吸引，零基础投身于编程学习，希望能把想法实现，开发一个技术金融计算的产品。Cool ～ 666</p>
                    <a class="add-one" href="javascript:;">加入新蕾计划，和 ta 做同学</a>
                </li>
                <li>
                    <div class="item-image">
                        <img src="./../../assets/images/github_default_avatar.png">
                    </div>
                    <p class="name">Emma Yang</p>
                    <p class="desc">6岁开始编码。10岁时，奶奶阿尔茨海默症病情恶化，她决开发一款APP，取名“永恒”，是世界第一款帮助老年痴呆患者日常生活的APP。</p>
                    <a class="add-one" href="javascript:;">加入孵化计划，和 ta 做一样学编程</a>
                </li>
                <li>
                    <div class="item-image">
                        <img src="./../../assets/images/github_default_avatar.png">
                    </div>
                    <p class="name">汪正洋</p>
                    <p class="desc">8岁编码，全国最小黑客，经常寻找各种网站的漏洞，进而训练自己的电脑技术。学习网络技术的目的是帮助网站修补完善，希望自己的技术能帮助到别人。</p>
                    <a class="add-one" href="javascript:;">加入孵化计划，和 ta 做一样学编程</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index_story',
    data () {
        return {
            
        }
    },
}
</script>

<style scoped lang="less">
.story-section{
    padding-top: 20px;
    h2{
        margin-top: 10px;
        line-height: 60px;
        height: 60px;
        text-align: left;
        font-size: 18px;
        color:#333;
    }

    .story-list{
        font-size: 0;

        li{
            position: relative;
            vertical-align: top;
            display: inline-block;
            width: 242px;
            height: 381px;
            margin-right: 10px;
            background: #fff;
            border-radius: 4px;
            border-top: 6px solid #02b3e4;
            text-align: center;
            
            &:last-child{
                margin-right: 0;
            }

            .item-image{
                position: relative;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                margin: 0 auto;
                transform: translateY(-50%);
                box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
                overflow: hidden;
                img{
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                }
            }
            .name{
                font-size: 28px;
                font-weight: 300;
                margin-bottom: 30px;
                color: #2e3d49;
            }
            .desc{
                padding: 0 20px 20px;
                font-size: 16px;
                line-height: 28px;
                color: #525c65;
                text-align: left;
            }

            &:hover{
                .add-one{
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .add-one{
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                line-height: 50px;
                font-size:12px;
                color: #02b3e4;
                letter-spacing: .5px;
                opacity: 0;
                transform: translateY(100%);
                transition: all .2s ease;
            }
        }

    }
}
</style>
