<template>
    <div class="serve-section">
        <div class="container">
            <h2>极客服务</h2>
            <ul class="serve-list">
                <li>
                    <i>兴趣班</i>
                    <h3 class="title">孵化计划</h3>
                    <p class="title-next">编程教育，从小抓起</p>
                    <p class="desc">
                        门栏高？学不会？电脑只会玩游戏？<br>
                        系统的学习，逐步进阶，小小极客诞生记
                    </p>
                    <div class="btn-container">
                    <a href="javascript:;" target="_blank">了解更多</a>
                    <a class="apply" href="javascript:;" target="_blank">免费试听</a>
                    </div>
                </li>

                <li>
                    <i>职业班</i>
                    <h3 class="title">新蕾计划</h3>
                    <p class="title-next">实战训练营，培养正规军</p>
                    <p class="desc">
                        代码是敲出来的，肌肉编程<br>
                        5个月小白变大牛，月薪8000起
                    </p>
                    <div class="btn-container">
                    <a href="javascript:;" target="_blank">了解更多</a>
                    <a class="apply" href="javascript:;" target="_blank">免费试听</a>
                    </div>
                </li>

                <li>
                    <i>暑期班</i>
                    <h3 class="title">破壳计划</h3>
                    <p class="title-next">暑期不虚度，毕业不失业</p>
                    <p class="desc">
                        2个月内入手互联网知识<br>
                        在一个好玩的地方，把想法实现
                    </p>
                    <div class="btn-container">
                    <a href="javascript:;" target="_blank">了解更多</a>
                    <a class="apply" href="javascript:;" target="_blank">免费试听</a>
                    </div>
                </li>

                <li>
                    <i>技能评测</i>
                    <h3 class="title">职业学位</h3>
                    <p class="title-next">为职场人提供专业的职业技能认证</p>
                    <p class="desc">
                        BAT一线工程师，一对一电测<br>
                        认证当前技术水平，获取专业技能证书
                    </p>
                    <div class="btn-container">
                    <a href="https://www.prodegree.com" target="_blank">了解更多</a>
                    </div>
                </li>


                <li>
                    <i>远程工作</i>
                    <h3 class="title">旅行办公</h3>
                    <p class="title-next">工作，还有诗和远方</p>
                    <p class="desc">
                        按需雇佣顶尖专业人才<br>
                        企业级人才资源服务平台
                    </p>
                    <div class="btn-container">
                    <a href="https://www.toppro.io" target="_blank">了解更多</a>
                    </div>
                </li>


                <li>
                    <i>传道授业</i>
                    <h3 class="title">校园公开课</h3>
                    <p class="title-next">给选择一个机会</p>
                    <p class="desc">
                        探索互联网前沿基础<br>
                        延续终生不断助人前行的动力
                    </p>
                    <div class="btn-container">
                    <a href="javascript:;" target="_blank">了解更多</a>
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

    h2{
        margin-top: 10px;
        line-height: 60px;
        height: 60px;
        text-align: left;
        font-size: 18px;
        color:#333;
    }

    .serve-list{
        font-size: 0;

        li{
            display: inline-block;
            vertical-align: middle;
            width: 326px;
            height: 210px;
            background: #fff;
            margin-right: 10px;
            position: relative;
            text-align: center;
            transition: all .5s ease;

            &:nth-child(3n){
                margin-right: 0;
                width: 328px;
            }
            &:nth-child(n+4){
                margin-top: 10px;
            }

            >i{
                position: absolute;
                top: 10px;
                left: 10px;
                min-width: 50px;
                padding: 0 5px;
                line-height: 20px;
                height: 22px;
                color:#bbb;
                border:1px solid #f0f0f0;
                font-size: 12px;
                font-style: normal;
            }

            .title{
                font-size: 16px;
                color:#35b558;
                line-height: 22px;
                font-weight: 500;
                padding-top: 30px;
            }

            .title-next{
                font-size: 12px;
                color:#999;
                line-height: 22px;
            }

            .desc{
                margin-top: 15px;
                margin-bottom: 20px;
                font-size: 13px;
                color:#333;
                line-height: 20px;
            }

            .btn-container{
                font-size: 0;
                a,.qun{
                    display: inline-block;
                    min-width: 85px;
                    text-align: center;
                    font-size: 13px;
                    color:#666;
                    border:1px solid #e4e4e4;
                    transition: all .5s ease;
                    margin-right: 20px;
                    padding: 8px;

                    &:last-child{
                        margin-right: 0px;
                    }
                    
                    &.apply{
                        border:1px solid #35b558;
                        color:#35b558;
                    }

                    &.ready{
                        cursor: text;
                    }


                    &:hover{
                        border:1px solid #35b558;
                        background: #35b558;
                        color: #fff;

                        &.ready{
                            background: #fff;
                            color:#666;
                            border:1px solid #e4e4e4;
                        }
                    }
                }
            }
        }
    }
}
</style>
