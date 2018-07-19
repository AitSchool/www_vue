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
                                <li v-for="chapter in course.chapters" :class="['chapter-item',(chapter.id == chapter_id) ? 'active' : '']">
                                    <div :class="['chapter-title',(chapter.id == chapter_id) ? 'active' : '']">{{chapter.name}}</div>
                                    <ul class="sidebar-sub-headers">
                                        <li class="sidebar-sub-header" v-for="section in chapter.sections">
                                            <router-link :to="{ name:'section_page',params: {
                                                id: course.id,
                                                chapter: chapter.id,
                                                section: section.id }}"
                                                :class="['sidebar-link',(section.id == section_id) ? 'active' : '']"
                                            >{{section.name}}</router-link>
                                        </li>
                                        <li class="sidebar-sub-header" v-for="homework in chapter.homeworks">
                                            <router-link :to="{ name:'section_page',params: {
                                                id: homework.id,
                                                chapter: chapter.id }}"
                                                :class="['sidebar-link']"
                                            >{{homework.name}}</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li :class="['chapter-item']" v-if="course.tasks.length">
                                    <div :class="['chapter-title']">实战任务</div>
                                    <ul class="sidebar-sub-headers">
                                        <li class="sidebar-sub-header" v-for="task in course.tasks">
                                            <router-link :class="['sidebar-link']"
                                                :to="{ name:'task_page',params: {id: task.id  }}"
                                            >{{task.name}}
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mainer">
                <div class="content" id="marked-content" v-if="section.name">
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
        if(!this.token){
          this.$router.push({ name: 'index_page' })
          return
        }
        this.fetchData()
        this.setInterval = setInterval(()=>{
            // this.sendtimes();
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

            let course = storage.get('exp_course_' + id);
            if(course){
                this.course = course
                return
            }

            this.token && axios({
                method: 'get',
                url: `${API.course}/${id}`,
            })
            .then( (response)=> {
                let course = response.data;
                console.log(course);
                this.course = course;
                storage.set('course_'+ id, course, 600*24);
            })
            .catch( (error)=> {
                console.log(error)
                this.$router.push('/')
            });
        },
        getSection:function(id){

            let section = storage.get('exp_section_' + id);
            if(section){
                this.section = section
                return
            }

            this.token && axios({
                method: 'get',
                url: `${API.section}/${id}`,
                headers: {
                    Authorization:`Bearer ${this.token}`
                }
            })
            .then( (response)=> {
                let section = response.data;
                this.section = section;
                storage.set('section_'+ id, section, 600*24);
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
    position: fixed;
    top: 61px;
    bottom: 51px;
    width: 100%;
    background-color: #f8f9fb;
}

.section-container{
    display: flex;
    height: 100%;

    .sidebar{
        width: 20rem;
        overflow-y: auto;
        border-right: 1px solid #e4e4e4;

        &::-webkit-scrollbar {
          width: 2px;
        }

        &::-webkit-scrollbar-track {
          border-radius: 1px;
          background: #e4e4e4;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 4px;
          background: #7d97ad;

        }

        .sidebar-heading{
            line-height: 50px;
            font-size: 16px;
            padding-left: 32px;
            font-weight: 600;
            color: #2c3e50;
        }

        .chapter-title{
            display: block;
            background: #eff1f3;
            color: #7d97ad;
            font-size: 12px;
            font-weight: 600;
            padding: 10px 16px 10px 32px;
        }


        .sidebar-link {
            display: block;
            font-weight: 400;
            color: #7d97ad;
            padding: 14px;
            padding-left: 32px;
            line-height: 1.6;
            font-size: 14px;
            vertical-align: middle;
            transition: all .2s ease;
            &:before{
                content: '';
                display: inline-block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                margin-right: 14px;
                background: #7d97ad;
                vertical-align: middle;
            }

            &.active {
                color: #2789d9!important;
                font-weight: 600;
                &:before{
                    background: #2789d9;
                }
            }

            &:hover{
                font-weight: 600;
                color: #2e3d48;
            }
        }
    }
    .mainer{
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 0;
        }
        .content{
            max-width: 750px;
            margin: 0 auto;
            padding: 2rem 2.5rem;
        }
    }
}
</style>
