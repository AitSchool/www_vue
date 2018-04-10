<template>
    <div class="blog-section">
        <div class="container">
            <ul>
                <li>
                    <a href="/blog/1" target="_blank">
                        <h3 class="title">兴趣 · 孵化计划</h3>
                    </a>
                </li>
                <li>
                    <a href="/blog/1" target="_blank">
                        <h3 class="title">职业 · 新蕾计划</h3>
                    </a>
                </li>
                <li>
                    <a href="/blog/1" target="_blank">
                        <h3 class="title">暑期 · 破壳计划</h3>
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

        &:nth-child(1){
            background: url('./../../assets/images/etus-banner.jpg');
            background-size: cover;
            background-position: 0 -30px;
        }


        &:nth-child(2){
            background: url('./../../assets/images/3jk_tmp_1.jpg');
            background-size: cover;
            background-position: 0 -32px;
        }


        &:nth-child(3){
            background: url('./../../assets/images/3jk_tmp_3.jpg');
            background-size: auto 120px;
            // background-position: -280px 0;
        }

        &:hover{
            box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
            a{
                background: transparent;
            }
        }

        &:nth-child(3n){
            margin-right: 0;
        }

        >a{
            display: block;
            width: 100%;
            height: 120px;
            background: rgba(0,0,0,.2);
            transition: all .2s ease;
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
