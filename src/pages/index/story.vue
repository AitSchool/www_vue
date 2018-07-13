<template>
    <div class="story-section">
        <div class="container-lg">
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
                    <p class="name">林熙</p>
                    <p class="desc">努力并不是为了证明自己多厉害，只是对自己生活方式的一种选择，每个人都可以通过自己的努力，去决定自己生活的样子。</p>
                    <a class="add-one" href="javascript:;">加入孵化计划，和 ta 做一样学编程</a>
                </li>
                <li>
                    <div class="item-image">
                        <img src="./../../assets/images/github_default_avatar.png">
                    </div>
                    <p class="name">陈剑涛</p>
                    <p class="desc">学着学着，兴趣越来越浓厚。被任务式学习所吸引，能一面学习一面输出作品，又能认识一群志同道合的战友，前行路上不再孤单。</p>
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
        padding: 3rem 0;
        text-align: center;
        font-size: 2rem;
        font-weight: 400;
        line-height: 2.25rem;
        color: #02b3e4;
    }

    .story-list{
        font-size: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

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
            box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);

            &:hover{
                box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
            }

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
