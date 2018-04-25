<template>
    <div class="graduation_page">
        <div class="container">
            <div class="overview-section" v-if="graduation.name">
                <p class="title">{{graduation.name}}</p>
                <div class="description">
                    <Marked :content="graduation.content"></Marked>
                </div>
                <div class="sub-section">
                    <p class="title" v-if="subLog.length">提交记录</p>
                    <table border="1" v-if="subLog.length">
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

                            <tr v-for="(item,index) in subLog">
                                <td >V{{item.times}}</td>
                                <td>{{item.created_at}}</td>
                                <td><a :href="item.url" class="link">{{item.full_name}}</a></td>
                                <td>{{item.correct_at}}</td>
                                <td>{{item.teacher.name || ''}}</td>
                                <td class="link" @click="commentEvent(item.remark)">{{item.remark ? '查看点评' : ''}}</td>
                                <td>{{item.score}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="btn-container" v-if="subLog.length < 3">
                        <a href="javascript:;" @click="submitEvent">提交毕设</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import Marked from '@/components/marked.vue'
import axios from 'axios';
import storage from '@/utils/storage.js';
import API from '@/config/api.js';

export default {
    name: 'graduation_page',
    created() {
        let params = this.$route.params;
        let id = params.id;
        this.id = id;
        this.getGraduation(id);
        this.getSubLog(id);
    },
    data () {
        return {
            graduation:{
                name:'',
                content:''
            },
            subLog:[]
        }
    },
    methods: {
        submitEvent:function(e){
            let link = prompt("请输入 Github 仓库的 full_name, 例如：https://github.com/<full_name>","")
            let id = this.id;
            if(!link || !link.trim()){
                return
            }

            let token = storage.get('token')
            token && axios({
                method: 'POST',
                url: `${API.graduation}/${id}`,
                headers: {
                    Authorization:`Bearer ${token}`
                },
                data:{
                    full_name: link
                }
            })
            .then( (response)=> {
                alert('提交成功')
            })
            .catch( (error)=> {
                if(error.response){
                    let message = error.response.data.message;
                    alert(message)
                }else{
                    console.log(error)
                }
            });
        },
        commentEvent:function(data){
            data && alert(data)
        },
        getGraduation:function(id){
            let token = storage.get('token')
            token && axios({
                method: 'get',
                url: `${API.graduation}/${id}`,
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            .then( (response)=> {
                this.graduation = response.data;
                console.log(this.graduation)
            })
            .catch( (error)=> {
                console.log(error)
            });
        },
        getSubLog:function(id){
            let token = storage.get('token')
            token && axios({
                method: 'get',
                url: `${API.graduation}/${id}/my`,
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            .then( (response)=> {
                this.subLog = response.data;
                console.log(this.subLog)
            })
            .catch( (error)=> {
                console.log(error)
            });
        },
    },
    components: {
        Marked
    }
}

</script>
<style scoped type="text/css" lang="less">
.graduation_page{
    padding-bottom: 70px;

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
}

</style>