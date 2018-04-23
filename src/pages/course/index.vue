<template>
    <div class="course_page" v-if="course.name">
        <div class="container">
            <div class="course-section">
                <div class="contain">
                    <div class="contain-header">
                        <div class="header-content">
                            <i class="tips">{{course.short_name}}</i>
                            <h4>{{course.name}}</h4>
                            <p class="desc">{{course.description}}</p>
                            <div class="details">
                                <p class="text">学习时长</p>
                                <p class="time">{{course.duration}}</p>
                            </div>
                        </div>
                        <div class="header-image">
                            <img :src="course.image_path">
                        </div>
                    </div>
                    <div class="contain-main">
                        <div class="main-aside">
                            <img src="./../../assets/images/book.svg">
                            <p class="tips">实战项目</p>
                            <p class="small" v-for="task in course.tasks">{{task.name}}</p>
                        </div>
                        <div class="main-content">
                            <h4>先备知识</h4>
                            <p class="desc">{{course.tips}}</p>
                            <div class="content-part">
                                <ul>
                                    <li v-for="chapter in course.chapters" >
                                        <div class="part">
                                            <h5 :data-id="chapter.id">{{chapter.name}}</h5>
                                            <div class="desc">
                                                <ul>
                                                    <li v-for="section in chapter.sections">
                                                        <span v-if="!can_learn">{{section.name}}</span>
                                                        <router-link v-else :to="{ name:'section_page',params: { 
                                                            id: course.id, 
                                                            chapter: chapter.id, 
                                                            section: section.id }}" >{{section.name}}</router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p class="link" v-for="homework in chapter.homeworks">{{homework.name}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
    name: 'course_page',
    created () {
        let id = this.$route.params.id;
        this.getCourse(id);
        this.hasBuy(id);
    },
    data () {
        return {
            can_learn:false,
            course:{},
            courseInfo:{
                id: 11,
                status: 0, //0 不能学习；1 已下单但没付款，不能学习；2 已付款或者免费，可以学习
                title:'HTML & CSS',
                description: 'HTML，是我们所有信息、资源流的集合与标记，如同树干与树叶的关系，告诉我们页面有什么，在哪里。就其核心来说, 是由元素组成的语言，为文本赋予它在一个文档中不同的意义, 结构化文档为逻辑区块 并且可以嵌入图片影像等资源到一个页面中。',
                duration: '20 小时',
                imageUrl: 'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/4cdffb64-3d45-49f3-84c3-60f2349a25c2.png',
                task: '写一个属于自己的个人网页',
                task_score: null, // 完成任务后的评分
                ready: '我们建议有对Web有一定的了解，可以在谷歌上搜索，以及（最重要的）坚持向前推进的决心！',
                chapters:[{
                    id:1,
                    title:'第一章名称',
                    homework:'作业：下载体验所有浏览器',
                    homework_score: 'A', //作业是否完成,完成有评分，否则为null
                    sections:[{
                        id: 1,
                        title: '什么是因特网',
                        study_status:0, //0 未学习过，1，学习过
                    },{
                        id: 2,
                        title: '什么是万维网',
                        study_status:0,
                    },{
                        id: 3,
                        title: 'web 浏览器',
                        study_status:0,
                    },{
                        id: 4,
                        title: '编程语言是什么？',
                        study_status:0,
                    }]
                },{
                    id:2,
                    title:'第二章名称',
                    homework:'作业：下载体验所有浏览器',
                    homework_score: null,
                    sections:[{
                        id: 1,
                        title: '什么是因特网',
                        study_status:0,
                    },{
                        id: 2,
                        title: '什么是万维网',
                        study_status:0,
                    },{
                        id: 3,
                        title: 'web 浏览器',
                        study_status:0,
                    },{
                        id: 4,
                        title: '编程语言是什么？',
                        study_status:0,
                    }]
                }]
            }
        }
    },
    methods: {
        getCourse:function(id){
            axios({
                method: 'get',
                url: `${API.course}/${id}`,
            })
            .then( (response)=> {
                let course = response.data;
                console.log(course);
                this.course = course;
            })
            .catch( (error)=> {
                console.log(error)
                this.$router.push('/')
            });
        },
        hasBuy:function(id){
            let token = storage.get('token')
            token && axios({
                method: 'get',
                url: `${API.course}/${id}/buy-status`,
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            .then( (response)=> {
                let can_learn = response.data.can_learn;
                this.can_learn = can_learn;
                console.log(can_learn)
            })
            .catch( (error)=> {
                console.log(error)
            });
        },
    },
    components: {

    }
}
</script>

<style scoped lang="less">
.course_page{

}
.course-section{
    margin-top: 70px;
    margin-bottom: 70px;

    .contain{
        width: 1000px;
        margin: 0 auto;
        position: relative;
        background: #fff;
        box-shadow: 0px 1px 20px 0px rgba(46,61,73,0.2);
        border-radius: 8px;

        .contain-header{
            height: 324px;
            display: flex;
            align-items:center;
            .header-image{
                width: 380px;
                height: 324px;
                flex-shrink:0;
                img{
                    width: 100%;
                    height: 100%;
                }

            }
            .header-content{
                position: relative;
                height: 324px;
                flex-grow:1;
                padding: 72px 60px 0;
                border-bottom:1px solid rgba(46,61,73,0.2);
                .tips{
                    position: absolute;
                    top: 12px;
                    left: 0;
                    height: 28px;
                    line-height: 28px;
                    text-indent: 60px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #fff;
                    letter-spacing:2px;
                    text-transform: uppercase;
                    padding-right: 12px;
                    background-image: linear-gradient(to right, #02b3e4 0%, #02ccba 100%);
                    &:after{
                        position: absolute;
                        content: '';
                        top: 0;
                        width: 0;
                        height: 0;
                        right: -16px;
                        border-style: solid;
                        border-width: 28px 16px 0 0;
                        border-color: #02ccba transparent transparent transparent;
                    }
                }

                h4{
                    font-size: 28px;
                    font-weight: 300;
                    line-height: 36px;
                    margin-bottom: 24px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #2e3d49;
                }

                >.desc{
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 400;
                    color: #525c65;
                    text-align: justify;
                }

                .details{
                    position: absolute;
                    left: 60px;
                    right: 60px;
                    bottom: 0;
                    height: 60px;
                    border-top: 1px solid #dbe2e8;
                    line-height: 60px;
                    font-size: 13px;
                    font-weight: 600;

                    .text{
                        float: left;
                        color: #02b3e4;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }
                    .time{
                        color: #7d97ad;
                        float: right;
                        line-height: 60px;
                    }
                }
            }
        }

        .contain-main{
            position: relative;
            .main-aside{
                position: absolute;
                top: 60px;
                right: 60px;
                width: 320px;
                height: 246px;
                background-color: rgba(219,226,232,0.2);
                border-radius: 4px;
                padding: 48px;
                img{
                    display: block;
                    height: 36px;
                }
                .tips{
                    font-size: 13px;
                    line-height: 24px;
                    letter-spacing:2px;
                    text-transform: uppercase;
                    font-weight: 600;
                    color: #7d97ad;
                    margin-bottom: 12px;
                }
                .small{
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 400;
                    color: #525c65;
                }
            }
            .main-content{
                width: 650px;
                padding: 60px;
                h4{
                    font-size: 13px;
                    line-height: 24px;
                    letter-spacing:2px;
                    text-transform: uppercase;
                    font-weight: 600;
                    color: #7d97ad;
                    margin-bottom: 12px;
                }
                >.desc{
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 400;
                    color: #525c65;
                    margin-bottom: 48px;
                }
                .content-part{
                    >ul{
                        list-style-type: none;
                        >li{
                            position: relative;
                            border-left: 1px solid #dbe2e8;
                            padding-left: 48px;
                            padding-bottom: 40px;
                            min-height: 216px;

                            &:after{
                                position: absolute;
                                top: 0;
                                left: 0;
                                content: '';
                                width: 8px;
                                height: 8px;
                                border-radius: 50%;
                                background-color: #02b3e4;
                                transform: translateX(-50%);
                            }

                            .part{
                                h5{
                                    font-size: 18px;
                                    font-weight: 600;
                                    color: #2e3d49;
                                    margin-bottom: 12px;
                                }
                                .desc{
                                    font-size: 14px;
                                    line-height: 24px;
                                    font-weight: 400;
                                    color: #525c65;
                                    margin-bottom: 12px;
                                }
                                .link{
                                    font-size: 13px;
                                    font-weight: 600;
                                    text-decoration: none;
                                    color: #02b3e4;
                                    letter-spacing: 1px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>
