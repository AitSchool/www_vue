<template>
    <div class="index_page">
        <banner></banner>
        <blog></blog>
        <plan :plans="plans" :myplan="myplan"></plan>
        <serve></serve>
        <story></story>
        <contact></contact>
    </div>
</template>

<script>
import axios from 'axios';
import storage from '@/utils/storage.js';
import API from '@/config/api.js';

import banner from './banner'
import blog   from './blog'
import plan   from './plan'
import serve  from './serve'
import intro  from './intro'
import story  from './story'
import contact from './contact'

export default {
    name: 'index_page',
    created () {
        this.getPlan();
        this.getMyPlan();
    },
    props: {
        token: {
            type: String,
            default: '',
        },
    },
    data () {
        return {
            plans: [],
            myplan: []
        }
    },
    methods: {
        getPlan:function (){
            // 获取计划列表
            let plans = storage.get('plans');
            if(plans){
                this.plans = plans
                return
            }

            axios({
                method: 'get',
                url: API.plan,
            })
            .then( (response)=> {
                let plans = response.data;
                this.plans = plans;
                storage.set('plans',plans)
            })
            .catch( (error)=> {
                console.log(error)
            });
        },
        getMyPlan:function(){
            // 获取用户购买状态
            
            this.token && axios({
                method: 'get',
                url: API.plan + '/my',
                headers: {
                    Authorization:`Bearer ${this.token}`
                }
            })
            .then( (response)=> {
                let myplan = response.data;
                this.myplan = myplan;
            })
            .catch( (error)=> {
                console.log(error)
            });
        }
    },
    components: {
        banner,
        blog,
        plan,
        serve,
        intro,
        story,
        contact
    }
}
</script>

<style scoped lang="less">
.index_page{
    background: #f5f5f5;
}
</style>
