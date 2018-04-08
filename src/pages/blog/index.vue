<template>
    <div class="blog_page">
        <div class="blog-header">
            <h2 class="title">{{title}}</h2>
            <p class="info">{{date}}@{{author}}</p>
        </div>
        <div class="blog-content">
            <Marked :content="content"></Marked>
        </div>
    </div>
</template>

<script>
import mock from './mock_data.js'
import Marked from '@/components/marked.vue'

export default {
    name: 'blog_page',
    data () {
        return {
            title:'标题',
            date:'2018-04-07',
            author:'Jax',
            content: mock.content
        }
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
