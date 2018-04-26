<template>
    <div class="plan_page" v-if="plan.name">
        <div class="container">
            <div class="intro-section">
                <h2>{{plan.name}}</h2>
                <div class="plan-info">
                    <div class="plan-image">
                        <img :src="plan.image_path" :alt="plan.name">
                    </div>
                    <div class="content">
                        <div class="plan-desc">{{plan.description}}</div>

                        <div class="line" v-if="false">
                            <div class="hight-line">
                                <span class="block"></span>
                            </div>
                        </div>
                    
                        <a v-if="false" href="javascript:;" class="join-btn">加入计划，马上学习</a>
                        
                    </div>
                </div>
            </div>
            <div class="task-section">
                <div class="task-item"  v-for="course in plan.courses" :class="course.status === 2 ? 'lock' : 'pass'">
                    <router-link v-if="course.status === 1" class="link" :to="{ name:'course_page',params: { id: course.id}}" ></router-link>

                    <h4>{{course.name}}</h4>
                    <p class="title">{{course.short_name}}</p>
                    <div class="score-contain">
                        <p class="score" v-if="course.status === 1">?</p>
                    </div>
                    <div class="start-gray">
                        <div class="start-yellow" :style="'width:0%;'"></div>
                    </div>
                </div>
            </div>
            <div class="graduation-section" v-if="false">
                <h3>毕业设计</h3>
                <div class="graduation-list">
                    <div class="graduation-item" v-for="graduation in plan.graduation_projects">
                        <router-link :to="{ name:'graduation_page',params: { id: graduation.id}}" >{{graduation.name}}</router-link>
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
            plan:{},
            is_buy: false,
        }
    },
    methods: {
        getPlanInfo:function(id){
            axios({
                method: 'get',
                url: `${API.plan}/${id}`,
            })
            .then( (response)=> {
                let plan = response.data;
                this.plan = plan
                console.log(plan)
            })
            .catch( (error)=> {
                this.$router.push('/')
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
            transition: box-shadow 0.3s ease;
            box-shadow: 8px 10px 20px 0px rgba(46,61,73,0.15);

            &:nth-child(5n){
                margin-right: 0;
            }

            &:nth-child(n+6){
                margin-top: 25px;
            }

            .link{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
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

    .graduation-section{
        margin-top: 70px;

        h3{
            color: #333;
            margin-bottom: 20px;
        }

        .graduation-item{
            line-height: 20px;
            color: #666;
        }
    }
}
</style>
