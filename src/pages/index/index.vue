<template>
    <div class="index_page">
        <banner></banner>
        <plan :plans="plans" :myplan="myplan"></plan>
        <advangate></advangate>
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
import plan   from './plan'
import advangate from './advangate';
import serve  from './serve'
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
            let plans = storage.get('exp_plans');
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
                storage.set('plans',plans,600*24);
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
        plan,
        advangate,
        serve,
        story,
        contact
    }
}
</script>

<style scoped lang="less">
.index_page{
  &:before{
    content: '';
    width: 100%;
    height: 660px;
    z-index: -1000;
    background: linear-gradient(160deg,#02ccba,#aa7ecd);
    transform-origin: left bottom;
    position: absolute;
    top: 0;
    left: 0;
    transform: skew(0deg,-15deg);
  }
}
</style>
