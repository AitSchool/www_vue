<template>
    <div class="plan-section">
        <h2>职业计划</h2>
        <div class="container">
            <div class="card-item"  v-for="plan in plans" >
                <!-- 状态 -->
                <i class="tag red" v-if="plan.status && plan.self_status">继续学习</i>
                <i class="tag" v-else-if="plan.status">马上学习</i>
                <i class="tag gray" v-else="plan.status">敬请期待</i>

                <!-- 信息 -->
                <img class="card-img" :src="plan.imageUrl" :alt="plan.title" :title="plan.title">
                <h3>{{plan.title}}</h3>

                <!-- 链接 -->
                <a v-if="plan.status" class="link" target="_blank" :href="'/plan/' + plan.id" ></a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'index_plan',
    data () {
        return {
            plans:[{
                id:1,
                title:'WEB工程师',
                status:1,
                self_status:1,
                imageUrl:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/4cdffb64-3d45-49f3-84c3-60f2349a25c2.png'
            },{
                id:2,
                title:'PHP工程师',
                status:1,
                self_status:0,
                imageUrl:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/914408a9-afc8-4aaf-8ff3-f7a2497bfeba.png'
            },{
                id:3,
                title:'Android工程师',
                status:0,
                self_status:0,
                imageUrl:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/6227c34f-5efd-4df2-911d-91654cb0691c.png'
            },{
                id:4,
                title:'iOS工程师',
                status:0,
                self_status:0,
                imageUrl:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/8950bb99-3b4e-4e1e-a0d4-ffbf04590c15.png'
            },{
                id:5,
                title:'微信小程序工程师',
                status:0,
                self_status:0,
                imageUrl:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/f1f87ca2-3d23-4220-8043-52394a190b89.png'
            },{
                id:6,
                title:'Python工程师',
                status:0,
                self_status:0,
                imageUrl:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/5e981faa-abed-4974-a127-d616c8076328.png'
            },{
                id:7,
                title:'Go语音工程师',
                status:0,
                self_status:0,
                imageUrl:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/6a6c62c4-a823-44f8-942c-0a0e0e256b17.png'
            },{
                id:8,
                title:'大数据平台研发工程师',
                status:0,
                self_status:0,
                imageUrl:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170808/41f60ad5-db13-416e-ad37-08495dbc0377.png'
            },{
                id:9,
                title:'机器学习工程师',
                status:0,
                self_status:0,
                imageUrl:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170929/816d64ca-6d0d-4507-b640-c9cd5dcd4bc4.png'
            },{
                id:10,
                title:'JAVA工程师',
                status:0,
                self_status:0,
                imageUrl:'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20170704/ad309043-9e84-4535-b85e-7b52ac4e3b2b.png'
            }]
        }
    },
}
</script>

<style scoped lang="less">
.plan-section{
    font-size: 0;

    h2{
        width: 1000px;
        margin: 0 auto;
        height: 70px;
        padding-top: 10px;
        font-size: 18px;
        line-height: 60px;
        color: #333;
    }

    .card-item{
        vertical-align: top;
        position: relative;
        display: inline-block;
        margin-right: 10px;
        padding-top: 15px;
        text-align: center;
        height: 150px;
        width: 192px;
        background: #fff;
        box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
        transition: box-shadow 0.3s ease;
        font-size: 12px;

        &:hover{
            box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
        }

        &:nth-child(5n){
            margin-right: 0;
        }
        &:nth-child(n+6){
            margin-top: 10px;
        }
        
        img{
            width: 160px;
            height: 96px;
        }

        h3{
            margin-top: 10px;
            font-size: 12px;
            color: #333;
        }

        .tag{
            display: inline-block;
            width: 60px;
            height: 18px;
            position: absolute;
            top: -2px;
            right: 0;
            background: #02b3e4;
            text-align: center;
            line-height: 18px;
            font-size: 12px;
            font-style:normal;
            color: #fff;
            &.gray{
                background: rgba(0, 0, 0, 0.4);
            }
            &.red{
                background: #ff5483;
            }
        }

        .link{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }
    }

}
</style>
