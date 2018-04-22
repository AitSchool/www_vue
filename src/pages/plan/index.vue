<template>
    <div class="plan_page">
        <div class="container">
            <div class="intro-section">
                <h2>{{planInfo.title}}</h2>
                <div class="plan-info">
                    <div class="plan-image">
                        <img :src="planInfo.imageUrl" :alt="planInfo.title">
                    </div>
                    <div class="content">
                        <div class="plan-desc">{{planInfo.description}}</div>

                        <div class="line" v-if="planInfo.status === 2">
                            <div class="hight-line" :style="'width:'+ planInfo.progress">
                                <span class="block">{{planInfo.progress}}</span>
                            </div>
                        </div>
                    
                        <a v-if="!is_buy" href="javascript:;" class="join-btn">加入计划，马上学习</a>

                    </div>
                </div>
            </div>
            <div class="task-section">
                <div class="task-item"  v-for="task in taskInfo" :class="task.status === 0 ? 'lock' : 'pass'">
                    <a v-if="task.status === 0" href="/course/1" target="_blank"></a>
                    <a v-else-if="task.status === 1" href="/course/1" target="_blank"></a>
                    <a v-else="task.status === 2"  href="/course/1" target="_blank"></a>

                    <h4>{{task.title}}</h4>
                    <p class="title">{{task.description}}</p>
                    <div class="score-contain">
                        <p class="score" v-if="task.status !== 0">{{task.score ? task.score : '?'}}</p>
                    </div>
                    <div class="start-gray" v-if="task.status !== 0">
                        <div class="start-yellow" :style="'width:'+ task.progress"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import storage from '@/utils/storage.js';
import API from '@/config/api.js';


export default {
    name: 'plan_page',
    created () {
        let id = this.$route.params.id;
        this.getPlanInfo(id);
        this.hasBuy(id);
        this.getMyCourse(id);
    },
    data () {
        return {
            is_buy: true,
            planInfo:{
                title: 'Web前端工程师',
                imageUrl: 'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/4cdffb64-3d45-49f3-84c3-60f2349a25c2.png',
                description: 'Web前端工程师是目前最火的互联网职业，它能充分理解项目需求和设计需求，并与设计师、后端工程师紧密合作，产出高质量的产品前端层，为用户呈现最好的界面交互体验。',
                status: 0, // 0 没报名，1 已报名没付款，2 已报名并付款
                progress: "20%", // 百分数或者 null，百分数更具完成计划下任务的百分数来定
            },
            taskInfo:[{
                id:1,
                title:'HTML',
                description: 'Web结构',
                score: 'A', // 任务的评分
                status: 2, // 0 没付款，1 已下订单但没付款，2 已报名并付款
                progress: "100%", // 每个章下作业完成的百分数

            },{
                id:2,
                title:'CSS',
                description: 'Web样式',
                score: null, 
                status: 2, 
                progress: "80%",
                
            },{
                id:3,
                title:'JavaScript Bascis',
                description: 'JS基础',
                score: null, 
                status: 2, 
                progress: "0%",
                
            },{
                id:3,
                title:'JavaScript Web',
                description: 'Web 交互',
                score: null, 
                status: 0, 
                progress: null,
                
            },{
                id:4,
                title:'JQuery',
                description: 'JQuery',
                score: null, 
                status: 0, 
                progress: null,
                
            },{
                id:4,
                title:'VUE',
                description: 'VUE',
                score: null, 
                status: 0, 
                progress: null,
            },{
                id:5,
                title:'REACT',
                description: 'REACT',
                score: null, 
                status: 0, 
                progress: null,
            },{
                id:5,
                title:'Angular',
                description: 'Angular',
                score: null, 
                status: 0, 
                progress: null,
            },{
                id:5,
                title:'工程化',
                description: '工程化',
                score: null, 
                status: 0, 
                progress: null,
            }]
        }
    },
    methods: {
        getPlanInfo:function(id){
            console.log(id)
            // let plans = storage.get('plans');
            // if(plans){
            //     this.plans = plans
            //     return
            // }

            axios({
                method: 'get',
                url: `${API.plan}/${id}`,
            })
            .then( (response)=> {
                let plan = response.data;
                console.log(plan)
            })
            .catch( (error)=> {
                console.log(error)
            });
        },
        hasBuy:function(id){
            let token = storage.get('token')
            token && axios({
                method: 'get',
                url: `${API.plan}/my?plan_id=${id}`,
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            .then( (response)=> {
                let is_buy = response.data.is_buy;
                this.is_buy = is_buy;
            })
            .catch( (error)=> {
                console.log(error)
            });
        },
        getMyCourse:function(id){
            let token = storage.get('token')
            token && axios({
                method: 'get',
                url: `${API.plan}/${id}/my-course`,
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            .then( (response)=> {
                let mycourse = response.data;
                this.mycourse = mycourse;
                console.log(mycourse)
            })
            .catch( (error)=> {
                console.log(error)
            });
        }
    },
    components: {

    }
}
</script>

<style scoped lang="less">
.plan_page{

    .intro-section{
        padding: 72px 0;

        h3{
            font-size: 18px;
            line-height: 45px;
        }

        .plan-info{
            padding-left: 300px;
            position: relative;
            height: 150px;

            .content{
                position: relative;
                height: 150px;
            }

            .plan-image{
                position: absolute;
                top: 0;
                left: 0;
                height: 150px;
                width: 250px;
                img{
                    height: 150px;
                    width: 250px;
                }
            }


            .plan-desc{
                color: #666;
                font-size: 14px;
                line-height: 20px;
            }

            .join-btn{
                position: absolute;
                bottom: 0;
                right: 0;
                display: inline-block;
                height: 45px;
                line-height: 45px;
                min-width: 136px;
                padding: 0 20px;
                font-size: 14px;
                font-weight: 500;
                color: #fff;
                background: #02b3e4;
                text-align: center;
                box-shadow: 8px 10px 20px 0px rgba(46,61,73,0.15);
                transition: box-shadow 0.3s ease;

                &:hover{
                    box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2)
                }
            }


            .line{
                position: absolute;
                bottom: 10px;
                left: 0;
                right: 0;
                height: 8px;
                background: #999;
                border-radius: 4px;

                .hight-line{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 8px;
                    width: 50%;
                    background: #333;
                    border-radius: 4px;
                    background-image: linear-gradient(to bottom right, #02b3e4, #02ccba);
                    
                    .block{
                        font-size: 14px;
                        color: #02b3e4;
                        display: inline-block;
                        height: 45px;
                        width: 80px;
                        position: absolute;
                        top: -65px;
                        right: -40px;
                        background: #fff;
                        border-radius: 8px;
                        line-height: 45px;
                        text-align: center;
                        box-shadow: 8px 10px 20px 0px rgba(46,61,73,0.15);
                        transition: box-shadow 0.3s ease;

                        &:before{
                            content: '';
                            display: inline-block;
                            width: 0;
                            left: 0;
                            position: absolute;
                            bottom: -15px;
                            left: 50%;
                            margin-left: -5px;
                            border-top: 18px solid #fff;
                            border-left: 5px solid transparent;
                            border-right: 5px solid transparent;
                            border-bottom: 0;
                        }

                        &:hover{
                            box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2)
                        }
                    }
                }
            }
        }
    }

    .task-section{
        font-size: 0;

        .task-item{
            position: relative;
            display: inline-block;
            width: 180px;
            height: 180px;
            background: #fff;
            margin-right: 25px;
            vertical-align: top;

            &:nth-child(5n){
                margin-right: 0;
            }

            &:nth-child(n+6){
                margin-top: 25px;
            }

            >a{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                transition: box-shadow 0.3s ease;
                box-shadow: 8px 10px 20px 0px rgba(46,61,73,0.15);

            }

            h4{
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
                height: 30px;
                line-height: 30px;
                padding-left: 10px;
                color: #fff;
            }
            .title{
                height: 25px;
                line-height: 25px;
                font-size: 14px;
                padding: 0 10px;
                overflow: hidden;
                color: #666;
            }

            .score-contain{
                height: 90px;
                text-align: center;
                overflow: hidden;

                .score{
                    margin-top: 30px;
                    font-size: 42px;
                    font-weight: 300;
                    color: #02b3e4;
                    line-height: 30px;
                    height: 30px;
                }

                .rate{
                    margin-top: 10px;
                    font-size: 12px;
                    color: #02b3e4;
                    line-height: 20px;
                }
            }

            .start-gray{
                height: 24px;
                width: 72px;
                margin: 0 auto;
                background: url('./../../assets/images/start_gray.svg');
                background-size: 24px;
            }

            .start-yellow{
                height: 24px;
                width: 100%;
                background: url('./../../assets/images/start_yellow.svg');
                background-size: 24px;
            }

            &.pass{
                &:hover{
                    box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2)
                }

                h4{
                    background: linear-gradient(to bottom right, #02b3e4, #02ccba);
                }
            }
            
            &.lock{
                h4{
                    background: #999;
                }

                .score-contain{
                    background: url('./../../assets/images/lock.svg') no-repeat center;
                    background-size: 45px 45px;
                }
            }

        }
    }
}
</style>
