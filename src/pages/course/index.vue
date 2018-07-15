<template>
    <div class="course_page">
        <Loading v-if="!course.name"></Loading>
        <div class="container" v-if="course.name">
            <div class="course-crumbs">首页 > 计划 > {{course.name}}</div>
            <div class="course-detail">
                <div class="course-detail-image">
                    <img :src="course.image_path">
                </div>
                <div class="course-detail-infomation">
                    <h2 class="title">{{course.name}} - {{course.short_name}}</h2>
                    <p class="description">{{course.description}}</p>
                    <div class="price" v-if="!can_learn">¥ {{course.price}}</div>
                    <div class="course-detail-action" v-if="!can_learn">
                        <div class="course-detail-btn">
                            <a v-if="!can_learn" href="javascript:;" class="course-detail-btn goPay">立即报名</a>
                            <a v-if="can_learn" href="javascript:;" class="course-detail-btn goStudy">去学习</a>
                        </div>
                        <div class="course-detail-duration">时长 : {{course.duration}} 分钟</div>
                    </div>
                </div>
            </div>
            <div class="course-catalog">
                <div class="course-catalog-info">
                    <h2 class="title">学前需知</h2>
                    <p class="description">{{course.tips}}</p>
                </div>
                <div class="courser-chapter">
                    <ul>
                        <li v-for="(chapter, index) in course.chapters" class="chapter-item">
                            <p class="chapter-title" :data-id="chapter.id">第 {{index + 1}} 章 {{chapter.name}}</p>
                            <ul class="chapter-children">
                                <li v-for="(section, sindex) in chapter.sections" class="section-item">
                                    <span v-if="!can_learn">第 {{sindex + 1}} 节 {{section.name}}</span>
                                    <router-link v-else :to="{ name:'section_page',params: {
                                        id: course.id,
                                        chapter: chapter.id,
                                        section: section.id }}" >第 {{sindex + 1}} 节 {{section.name}}</router-link>
                                </li>
                            </ul>

                            <div class="homeworks-container">
                                <p class="link homeworks-item" v-if="!can_learn" v-for="homework in chapter.homeworks">{{homework.name}}
                                </p>
                                <router-link v-if="can_learn" class="link homeworks-item"  v-for="homework in chapter.homeworks" :key="homework.id" :to="{ name:'homework_page',params: {
                                    id: homework.id  }}" >{{homework.name}}
                                </router-link>
                            </div>

                        </li>
                    </ul>
                </div>
                <div class="task-section">
                    <p class="title">实战训练</p>
                    <div class="task-container">
                        <p class="task-item link" v-if="!can_learn" v-for="task in course.tasks">{{task.name}}</p>
                        <router-link  v-if="can_learn" class="task-item link"  v-for="task in course.tasks" :key="task.id" :to="{ name:'task_page',params: {
                            id: task.id  }}" >{{task.name}}
                        </router-link>
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
import Loading from '@/components/loading.vue'
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
            let course = storage.get('exp_course_' + id);
            if(course){
                this.course = course
                return
            }

            axios({
                method: 'get',
                url: `${API.course}/${id}`,
            })
            .then( (response)=> {
                let course = response.data;
                console.log(course);
                this.course = course;
                storage.set('course_' + id, course, 600*24);
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
        Loading
    }
}
</script>

<style scoped lang="less">

.course_page{
    height: 100%;
    padding-bottom: 70px;

    .course-crumbs{
        height: 48px;
        line-height: 48px;
        font-size: 12px;
        color: #666;
        letter-spacing: 1px;
    }

    .course-detail{
        display: flex;
        padding: 20px;
        background: #fff;
        box-shadow: 0px 1px 20px 0px rgba(46, 61, 73, 0.2);
        border-radius: 8px;

        .course-detail-image{
            width: 300px;
            flex: none;
            height: 200px;
            margin-right: 25px;
            img{
                width: 100%;
                height: 100%;
                background: #f1f1f1;
            }
        }

        .course-detail-infomation{
            flex: auto;

            .title{
                font-size: 24px;
                color: #333;
                line-height: 30px;
                margin: 10px 0;
            }
            .description{
                font-size: 12px;
                color: #666;
                line-height: 20px;
                height: 60px;
                overflow: hidden;
            }

            .price{
                font-size: 20px;
                color: #ff5c00;
                line-height: 30px;
                margin-bottom: 20px;
            }
        }

        .course-detail-action{
            position: relative;
        }

        .course-detail-btn{
            height: 40px;
            >a{
                display: inline-block;
                width: 125px;
                height: 40px;
                border-radius: 4px;
                background: #02b3e4;
                color: #fff;
                border: 1px solid #02b3e4;
                font-size: 18px;
                line-height: 38px;
                transition: all .2s ease;
                text-align: center;

                &:hover{
                    background: #fff;
                    color: #02b3e4;
                }
            }
        }

        .course-detail-duration{
            position: absolute;
            bottom: 0;
            right: 0;
            font-size: 12px;
            color: #666;
        }
    }
}

.course-catalog{
    position: relative;
    background: #fff;
    padding: 30px;
    margin-top: 30px;
    box-shadow: 0px 1px 20px 0px rgba(46, 61, 73, 0.2);
    border-radius: 8px;

    .course-catalog-info{
        border: 1px solid #e4e4e4;
        padding-top: 30px;
        border-bottom: 0;

        .title{
            border-left: 2px solid #02b3e4;
            font-size: 16px;
            color: #333;
            font-weight: 500;
            padding-left: 28px;
            margin-left: -1px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 15px;
        }

        .description{
            font-size: 12px;
            line-height: 20px;
            min-height: 40px;
            margin: 0 30px;
        }
    }

    .courser-chapter{
        border: 1px solid #e4e4e4;
        border-top: 0;

        .chapter-title{
            padding: 0 30px;
            height: 40px;
            line-height: 40px;
            background: #f5f5f5;
            font-size: 14px;
            color: #666;
        }

        .section-item,.homeworks-item{
            padding: 0 45px;
            line-height: 40px;
            height: 40px;
            color: #666;
            font-size: 13px;

            a{
                display: block;
                height: 100%;
            }

            &:hover{
                background: #f1f1f1;

                a{
                    color: #02b3e4;
                }
            }
        }

        .link{
            display: block;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            color: #02b3e4;
            letter-spacing: 1px;
        }
    }

    .task-section{
        margin-top: 30px;

        .title{
            padding: 0 30px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            color: #333;
            border-bottom: 1px solid #e4e4e4;
        }

        .task-item{
            padding: 0 30px;
            line-height: 40px;
            height: 40px;
            color: #666;
            font-size: 13px;
        }

        .link{
            display: block;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            color: #02b3e4;
            letter-spacing: 1px;
        }

    }
}

</style>
