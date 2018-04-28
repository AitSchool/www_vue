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
                            <p class="small" v-if="!can_learn" v-for="task in course.tasks">{{task.name}}</p>
                            
                            <router-link  v-if="can_learn" class="small"  v-for="task in course.tasks" :key="task.id" :to="{ name:'task_page',params: { 
                                id: task.id  }}" >
                                <p class="small">{{task.name}}</p>
                            </router-link>

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
                                            <p class="link" v-if="!can_learn" v-for="homework in chapter.homeworks">{{homework.name}}</p>
                                            <router-link v-else class="link"  v-for="homework in chapter.homeworks" :key="homework.id" :to="{ name:'homework_page',params: { 
                                                id: homework.id  }}" >{{homework.name}}</router-link>

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
    props: {
        token: {
            type: String,
            default: '',
        },
    },
    data () {
        return {
            can_learn:false,
            course:{},
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
            
            this.token && axios({
                method: 'get',
                url: `${API.course}/${id}/buy-status`,
                headers: {
                    Authorization:`Bearer ${this.token}`
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
