<template>
    <div class="homework_page">
        <div class="container">
            <div v-for="homework in homeworkInfo">
                <div class="overview-section">
                    <p class="title">{{homework.title}}</p>
                    <div class="description">
                        <Marked :content="homework.description"></Marked>
                    </div>
                    <div class="sub-section">
                        <p class="title">提交记录</p>
                        <table border="1">
                            <tbody>
                                <tr>
                                    <th rowspan="2" style="width:50px;">版本</th>
                                    <th rowspan="2">提交时间</th>
                                    <th rowspan="2">作业地址</th>
                                    <th colspan="4">批改</th>
                                </tr>
                                <tr>
                                    <th>批改时间</th>
                                    <th>批改老师</th>
                                    <th>点评</th>
                                    <th>评分</th>
                                </tr>

                                
                                <tr v-for="(subLog,index) in homework.subLog">
                                    <td >V{{index + 1}}</td>
                                    <td>{{subLog.created_time}}</td>
                                    <td><a href="javascript:;" class="link">Github</a></td>
                                    <td>{{subLog.comment.time}}</td>
                                    <td>{{subLog.comment.teacher}}</td>
                                    <td>{{subLog.comment.content ? "查看点评" : ""}}</td>
                                    <td>{{subLog.comment.score}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="btn-container" v-if="homework.subLog.length < 3">
                            <a href="javascript:;">提交作业</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import Marked from '@/components/marked.vue'

export default {
    name: 'homework_page',
    data () {
        return {
            homeworkInfo: [{
                title: '完成一个个人博客',
                description: "模仿作业：仿照【讲解视频】中老师的代码演示，配置好开发环境，开发基础版的百度首页，能够基本符合视觉上的要求，能够让整块在页面大致垂直居中，页面的点击全部为真实点击，按钮样式不做太多要求，大致符合即可，并不要求CSS主要在于HTML及其标签的使用（不要求使用CSS，因此可仿照老师视频中的演示100%抄写对应的CSS代码，下个任务会讲到炫酷的CSS部分的知识）！",
                subLog:[{
                    id:1,
                    created_time: '2018-04-09 11:30',
                    comment: {
                        time: '2018-04-10 11:30',
                        teacher: 'JaxChu',
                        score: 95,
                        content: '非常棒！继续加油！'
                    }
                },{
                    id:2,
                    created_time: '2018-04-09 11:30',
                    comment: {}
                }]
            },{
                title: '开发课程表',
                description: "利用HTML&HTML5标签及表格table等知识开发课程表。本次作业为独立作业，要求自己实现。",
                subLog:[{
                    id:1,
                    created_time: '2018-04-09 11:30',
                    comment: {
                        time: '2018-04-10 11:30',
                        teacher: 'JaxChu',
                        score: 95,
                        content: '非常棒！继续加油！'
                    }
                },{
                    id:2,
                    created_time: '2018-04-09 11:30',
                    comment: {
                        time: '2018-04-10 11:30',
                        teacher: 'JaxChu',
                        score: 95,
                        content: '非常棒！hahaaha！'
                    }
                },{
                    id:2,
                    created_time: '2018-04-09 11:30',
                    comment: {
                        time: '2018-04-10 11:30',
                        teacher: 'JaxChu',
                        score: 95,
                        content: '非常棒！hahaaha！'
                    }
                }]
            }]
        }
    },
    components: {
        Marked
    }
}

</script>
<style type="text/css" lang="less">
.homework_page{
    padding-bottom: 70px;
}
.overview-section{
    padding-top: 80px;
    .title{
        font-size: 42px;
        font-weight: 300;
        color: #333;
        margin-bottom: 20px;
    }
    .description{
        margin-bottom: 60px;
    }
}
.sub-section{
    .title{
        font-size: 18px;
        color: #333;
        margin-bottom: 10px;
        font-weight: 600;
    }

    table{
        border-collapse: collapse;
        width: 100%;
        line-height: 20px;
        text-align: center;
        color: #666;

        th{
            color: #333;
            padding: 4px 0;
        }
        td{
            padding: 4px 0;
        }

        .link{
            display: block;
            height: 100%;
            color: #02b3e4;
        }

        .comment{
            padding: 4px 12px;
            text-align: left;
        }
    }
}
.btn-container{
    margin-top: 20px;
    text-align: right;

    >a{
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
}
</style>