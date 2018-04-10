<template>
    <div class="blog-section">
        <div class="container">
            <ul>
                <li>
                    <a href="/blog/1" target="_blank">
                    <img src="" >
                    <h3 class="title">孵化计划</h3>
                    </a>
                </li>
                <li>
                    <a href="/blog/1" target="_blank">
                    <img src="">
                    <h3 class="title">新蕾计划</h3>
                    </a>
                </li>
                <li>
                    <a href="/blog/1" target="_blank">
                    <img src="">
                    <h3 class="title">破壳计划</h3>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index_blog',
    data () {
        return {
            
        }
    },
}
</script>

<style scoped lang="less">
.blog-section{
    ul{
        list-style-type: none;
        font-size: 0;
        text-align: center;
    }

    li{
        vertical-align: top;
        position: relative;
        display: inline-block;
        min-height: 120px;
        width: 320px;
        font-size: 12px;
        background: #fff;
        box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
        transition: box-shadow 0.3s ease;
        margin-right: 15px;

        &:hover{
            box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
        }

        &:nth-child(3n){
            margin-right: 0;
        }

        a{
            display: block;
            width: 100%;
            height: 100%;
        }

        img{
            display: block;
            height: 120px;
        }

        .title {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0,0,0,.5);
            font-size: 14px;
            color: #fff;
            height: 30px;
            line-height: 30px;
            letter-spacing: 2px;
        }

    }
}
</style>
