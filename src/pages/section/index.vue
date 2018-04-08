<template>
    <div class="section_page">
        <div class="container">
            <div class="navigation-contain">
                <h3 id="course_id">{{courseInfo.title}}</h3>
                <ul class="chapter_list">
                    <li class="chapter_item" v-for="chapter in courseInfo.chapters">
                        <p class="chapter-title">{{chapter.title}}</p>
                        <ul class="section_list">
                            <li v-for="section in chapter.sections">
                                <a href="javascript:;">{{section.title}}</a>
                            </li>
                            <li>
                                <a href="javascript:;">作业 {{chapter.homework}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="section-contain">
                <h4>浏览器历史 </h4>
                <div class="text-content">
                    <Marked :content="sectionInfo.content"></Marked>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Marked from '@/components/marked.vue'
import mock from '@/pages/blog/mock_data.js'

export default {
    name: 'section_page',
    data () {
        return {
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
    components: {
        Marked
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
                    color: #E25E5E;
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
