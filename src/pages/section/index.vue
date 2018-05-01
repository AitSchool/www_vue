<template>
    <div class="section_page">
        <Loading v-if="!section.name"></Loading>
        <div class="container" v-if="section.name">
            <div class="navigation-contain">
                <h3 id="course_id">{{course.name}}</h3>
                <ul class="chapter_list">
                    <li class="chapter_item" v-for="chapter in course.chapters" :class="[(chapter.id == chapter_id) ? 'chapter_active' : '']">
                        <p :class="['chapter-title']" >{{chapter.name}}</p>
                        <ul class="section_list">
                            <li v-for="section in chapter.sections" :class="[(section.id == section_id) && (chapter.id == chapter_id) ? 'section_active' : '']">
                                <router-link :to="{ name:'section_page',params: { 
                                    id: course.id, 
                                    chapter: chapter.id, 
                                    section: section.id }}" >{{section.name}}</router-link>
                            </li>
                            <li>
                                <router-link 
                                    v-for="homework in chapter.homeworks" 
                                    :to="{ name:'homework_page',params: {id: homework.id }}"  
                                    :key="homework.id" 
                                >{{homework.name}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="section-contain" v-if="section.name">
                <!-- <h4>{{section.name}}</h4> -->
                <div class="text-content">
                    <Marked :content="section.content || '暂无内容'"></Marked>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import storage from '@/utils/storage.js';
import API from '@/config/api.js';

import Marked from '@/components/marked.vue'
import mock from '@/pages/blog/mock_data.js'
import Loading from '@/components/loading.vue'

export default {
    name: 'section_page',
    created () {
        this.fetchData()
        this.setInterval = setInterval(()=>{
            this.sendtimes();
        },30000)
    },
    props: {
        token: {
            type: String,
            default: '',
        },
    },
    beforeDestroy () {
        clearInterval(this.setInterval)
    },
    data () {
        return {
            section: {
                naem:'',
                content:'',
            },
            course: {},
            course_id: 0,
            chapter_id: 0,
            section_id: 0,
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
                    homework:'下载体验所有浏览器',
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
                    homework:'下载体验所有浏览器',
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
            },
            sectionInfo: {
                id: 2,
                title: '什么是因特网',
                content: mock.content
            }
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        sendtimes:function(){
            let params = this.$route.params;
            let id = params.section;

            this.token && axios({
                method: 'POST',
                url: `${API.section}/${id}/time`,
                headers: {
                    Authorization:`Bearer ${this.token}`
                },
                data:{
                    seconds:30
                }
            })
            .then( (response)=> {
                console.log(response)
            })
            .catch( (error)=> {
                console.log(error)
            });
        },
        fetchData () {
            let params = this.$route.params;
            this.course_id = params.id;
            this.chapter_id = params.chapter;
            this.section_id = params.section;
            this.getSection(params.section)
            this.getCourse(params.id)
        },
        getCourse:function(id){

            this.token && axios({
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
        getSection:function(id){
            
            this.token && axios({
                method: 'get',
                url: `${API.section}/${id}`,
                headers: {
                    Authorization:`Bearer ${this.token}`
                }
            })
            .then( (response)=> {
                this.section = response.data;
                console.log(this.section)
            })
            .catch( (error)=> {
                this.$router.push('/')
            });
        }
    },
    components: {
        Marked,
        Loading
    }
}
</script>

<style scoped lang="less">
.section_page{
    padding-top: 20px;
    padding-bottom: 70px;
}
.navigation-contain{
    display: inline-block;
    width: 230px;
    padding-bottom: 20px;
    vertical-align: top;
    border-right: 1px solid #e4e4e4;


    h3{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .chapter_list >li{
        position: relative;
        padding: 0 40px 8px 0;
        font-size: 14px;

        a{
            color: #666;
        }
        
        &.chapter_item{
            .chapter-title{
                display: block;
                margin-bottom: 5px;
            }

            &.chapter_active{
                .chapter-title{
                    color: #ff5483;
                    font-weight: 600;
                }
                .section_list{
                    display: block;
                }
            }

            &:after{
                position: absolute;
                top: 3px;
                right: 20px;
                display: inline-block;
                width: 14px;
                height: 14px;
                content: '';
                background: url('./../../assets/images/chapter_default_icon.png')no-repeat center;
            }
            &.finish{
                &:after{
                    background: url('./../../assets/images/chapter_finish_icon.png')no-repeat center;
                }
            }
            &.study{
                &:after{
                    background: url('./../../assets/images/chapter_study_icon.png')no-repeat center;
                }
            }
        }

        .section_list{
            >li{
                position: relative;
                font-size: 12px;
                padding-left: 15px;
                height: 20px;
                line-height: 20px;
                margin-bottom: 5px;

                &:after{
                    position: absolute;
                    top: 3px;
                    right: -20px;
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    text-align: center;
                }

                &.right{
                    &:after{
                        content: '✓';
                        color: #35b558;
                    }
                }

                &.wrong{
                    &:after{
                        color: #ff5483;
                        content: '✘';
                    }
                }

                &.section_active a{
                    color: #02b3e4;
                }
            }
        }

        .link{
            font-weight: 600;
            text-decoration: none;
            color: #333;
        }
    }
}

.section-contain{
    display: inline-block;
    vertical-align: top;
    width: 720px;
    padding-left: 20px;
    
    h4{
        margin: 0 0 20px 0;
        padding: 0;
        font-size: 22px;
        color: #333;
    }
    
    .text-content{
        font-size: 14px;
        line-height: 1.5;
        color: #333;
        text-align: justify;
    }
}

</style>
