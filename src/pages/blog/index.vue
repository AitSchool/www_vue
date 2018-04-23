<template>
    <div class="blog_page" v-if="blog.title">
        <div class="blog-header">
            <h2 class="title">{{blog.title}}</h2>
            <p class="info">{{blog.updated_at}}@{{blog.creator.name}}</p>
        </div>
        <div class="blog-content">
            <Marked :content="blog.content"></Marked>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import storage from '@/utils/storage.js';
import API from '@/config/api.js';

import mock from './mock_data.js'
import Marked from '@/components/marked.vue'

export default {
    name: 'blog_page',
    data () {
        return {
            blog:{},
            title:'标题',
            date:'2018-04-07',
            author:'Jax',
            content: mock.content
        }
    },
    created() {
        let params = this.$route.params;
        let id = params.id;
        this.getBlog(id);
    },
    methods: {
        getBlog:function(id){
            axios({
                method: 'get',
                url: `${API.blog}/${id}`,
            })
            .then( (response)=> {
                this.blog = response.data;
                console.log(response)
            })
            .catch( (error)=> {
                this.$router.push('/')
            });
        },
    },
    components: {
        Marked
    }
}
</script>

<style scoped lang="less">

.blog-header{
    height: 300px;
    padding-top: 100px;
    text-align: center;
    
    .title{
        color: #333;
        font-size: 22px;
        letter-spacing: 2px;
        margin-bottom: 15px;
    }

    .info{
        font-size: 12px;
        color: #999;
        letter-spacing: 1px;
    }
}

.blog-content{
    width: 750px;
    margin: 0 auto 100px;
    font-size: 16px;
    line-height: 1.8;
    color: #333;
    text-align: justify;
}
</style>
