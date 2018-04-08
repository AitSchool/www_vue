<template>
    <div class="blog-section">
        <div class="container">
            <ul>
                <li>
                    <a href="/blog/1" target="_blank">
                    <img src="" >
                    <h3>孵化计划</h3>
                    </a>
                </li>
                <li>
                    <a href="/blog/1" target="_blank">
                    <img src="">
                    <h3>新蕾计划</h3>
                    </a>
                </li>
                <li>
                    <a href="/blog/1" target="_blank">
                    <img src="">
                    <h3>破壳计划</h3>
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
    }

    li{
        vertical-align: top;
        position: relative;
        display: inline-block;
        height: 120px;
        width: 327px;
        font-size: 12px;
        text-align: center;
        background: #fff;
        box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
        transition: box-shadow 0.3s ease;
        margin-right: 10px;

        &:hover{
            box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
        }

        &:nth-child(3n){
            margin-right: 0;
            width: 326px;
        }

        a{
            display: block;
            width: 100%;
            height: 100%;
        }

        .title {
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            overflow: hidden;
            color: #333;
            margin-bottom: 10px;
            text-align: left;
        }

    }
}
</style>
