<template>
    <div class="blog-section">
        <div class="container">
            <ul>
                <li>
                    <a target="_blank" href="https://shimo.im/docs/nwDduoDZ29o6Alc7">
                        <h3 class="title">兴趣 · 探月计划</h3>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://shimo.im/docs/d9NB9xlSo2IOvCzI">
                        <h3 class="title">暑期 · 破壳计划</h3>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://shimo.im/docs/wgAgkqgGrFYO2ky7">
                        <h3 class="title">职业 · 新蕾计划</h3>
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
        background-color: #fff;
        box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
        transition: box-shadow 0.3s ease;
        margin-right: 15px;
        background-size: contain;
        background-position: center -10px;
        background-repeat: no-repeat;
        background-color: #f5f5f5;
        overflow: hidden;

        &:nth-child(1){
            background-image: url('./../../assets/images/index/bluesea_1.png');
        }


        &:nth-child(2){
            background-image: url('./../../assets/images/index/bluesea_2.png');
        }


        &:nth-child(3){
            background-image: url('./../../assets/images/index/bluesea_3.png');
        }

        &:hover{
            box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
        }

        &:nth-child(3n){
            margin-right: 0;
        }

        >a{
            display: block;
            width: 100%;
            height: 120px;
        }

        .title {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            font-size: 14px;
            color: #333;
            height: 30px;
            line-height: 30px;
            letter-spacing: 2px;
            transition: all .2s ease;
        }

    }
}
</style>
