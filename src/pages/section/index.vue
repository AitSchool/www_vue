<template>
    <div class="section_page">
        <Loading v-if="!section.name"></Loading>
        <div class="section-container" v-if="section.name">
            <div class="sidebar">
                <ul class="sidebar-links">
                    <li>
                        <div class="sidebar-group">
                            <p class="sidebar-heading"><span>{{course.name}}</span></p>
                            <ul class="sidebar-group-items">
                                <li v-for="chapter in course.chapters">
                                    <a href="javascript:;" :class="['sidebar-link',(chapter.id == chapter_id) ? 'active' : '']">{{chapter.name}}</a>
                                    <ul class="sidebar-sub-headers">
                                        <li class="sidebar-sub-header" v-for="section in chapter.sections">
                                            <router-link :to="{ name:'section_page',params: { 
                                                id: course.id, 
                                                chapter: chapter.id, 
                                                section: section.id }}" 
                                                :class="['sidebar-link',(section.id == section_id) ? 'active' : '']"
                                            >{{section.name}}</router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mainer">
                <div class="content" v-if="section.name">
                    <Marked :content="section.content || '暂无内容'"></Marked>
                </div>
            </div>
        </div>
        <div class="container" v-if="section.name && false">
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
                name:'',
                content:'',
            },
            course: {},
            course_id: 0,
            chapter_id: 0,
            section_id: 0,
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

.section-container{
    display: flex;
    //width: 1200px;
    //margin: 0 auto;
    .sidebar{
        font-size: 15px;
        background-color: #fff;
        width: 20rem;
        z-index: 10;
        margin: 0;
        top: 3.6rem;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
        border-right: 1px solid #eaecef;
        overflow-y: auto;

        .sidebar-links {
            padding: 1.5rem 0;
        }

        .sidebar-heading {
            color: #2c3e50;
            transition: color .15s ease;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: 700;
            padding-left: 1.5rem;
            margin-top: 0;
            margin-bottom: .5rem;
        }

        .sidebar-link {
            font-weight: 400;
            display: inline-block;
            color: #666;
            border-left: .25rem solid transparent;
            padding: .35rem 1rem .35rem 1.25rem;
            line-height: 1.4;
            width: 100%;
            box-sizing: border-box;

            &.active {
                color: #02b3e4;
                border-left-color: #02b3e4;
            }
        }

        .sidebar-sub-headers {
            padding-left: 1rem;
            font-size: .95em;

            .sidebar-link {
                font-weight: 400;
                padding-top: .25rem;
                padding-bottom: .25rem;
                border-left: none;
            }
        }
    }
    .mainer{
        .content{
            max-width: 750px;
            margin: 0 auto;
            padding: 2rem 2.5rem;
        }
    }
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
