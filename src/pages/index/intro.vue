<template>
    <div class="story-section">
        <div class="container">
            <h2>学习≠培训</h2>
            <ul class="story-list">
                <li>
                    <div class="mask">
                        <a href="javascript:;">
                            <p class="desc">从业十年磨一剑</p>
                            <p class="title">更专业</p>
                            <p class="link">点击了解</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="mask">
                        <a href="javascript:;">
                            <p class="desc">践行你的主张</p>
                            <p class="title">有故事</p>
                            <p class="link">点击了解</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="mask">
                        <a href="javascript:;">
                            <p class="desc">我们更关注“人”</p>
                            <p class="title">有温度</p>
                            <p class="link">点击了解</p>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index_intro',
    data () {
        return {
            
        }
    },
}
</script>

<style scoped lang="less">
.story-section{

    h2{
        padding-top: 10px;
        line-height: 70px;
        height: 70px;
        text-align: left;
        font-size: 18px;
        color:#333;
    }

    .story-list{
        font-size: 0;

        li{
            display: inline-block;
            vertical-align: top;
            width: 326px;
            height: 420px;
            background: #fff;
            margin-right: 10px;
            text-align: center;
            transition: all .5s ease;

            &:last-child{
                margin-right: 0;
            }

            .mask{
                height: 100%;
                text-align: center;
                padding-top: 40px;
                transition: all .2s ease;

                >a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                }
            }

            .desc{
                font-size: 21px;
                font-weight: 700;
                height: 100px;
                line-height: 100px;
                opacity: 0;
            }

            .title{
                width: 140px;
                height: 140px;
                border-radius: 50%;
                margin: 0 auto 40px;
                font-size: 30px;
                line-height: 136px;
                border: 2px solid #fff;
            }

            .link{
                font-size: 18px;
                opacity: 0;
            }

            // &:hover{
                .desc,.link{
                    opacity: 1;
                }

                .title{
                    background: #fff;
                }
            // }

            &:nth-child(1){
                background: url('./../../assets/images/3jk_tmp_2.jpg');
                background-size: auto 420px;

                // &:hover{
                    .mask{
                        background: rgba(250,234,103,.9);
                    }
                    .title,.desc,.link{
                        color: #333;
                    }
                // }
            }


            &:nth-child(2){
                background: url('./../../assets/images/3jk_tmp_1.jpg');
                background-size: auto 420px;
                background-position: center -20px;

                // &:hover{
                    .mask{
                        background: rgba(85,182,218,.9);
                    }
                    .title{
                        color: rgba(85,182,218,.9);
                    }
                // }
            }

            &:nth-child(3){
                background: url('./../../assets/images/3jk_tmp_3.jpg');
                background-size: auto 420px;
                background-position: -280px 0;
                // &:hover{
                    .mask{
                        background: rgba(221,94,110,.9);
                    }
                    .title{
                        color: rgba(221,94,110,.9);
                    }
                // }
            }

        }
    }

}
</style>
