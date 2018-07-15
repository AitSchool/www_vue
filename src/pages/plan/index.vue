<template>
    <div class="plan_page">
      <banner :is_buy="is_buy"></banner>
      <market v-if="!is_buy"></market>
      <course :plan="plan"></course>
      <serve v-if="!is_buy"></serve>
      <advantage v-if="!is_buy"></advantage>
      <try7day v-if="!is_buy"></try7day>
      <help></help>
      <contact v-if="!is_buy"></contact>
    </div>
</template>

<script>
import axios from 'axios';
import storage from '@/utils/storage.js';
import API from '@/config/api.js';
import Loading from '@/components/loading.vue'
import banner from './banner'
import market from './market'
import course from './course'
import serve from './serve'
import advantage from './advantage'
import help from './help'
import try7day from './try'
import contact from './contact'

export default {
    name: 'plan_page',
    created () {
        let id = this.$route.params.id;
        this.getPlanInfo(id);
        this.hasBuy(id);
        this.getMyCourse(id);
    },
    props: {
        token: {
            type: String,
            default: '',
        },
    },
    data () {
        return {
            plan:{},
            is_buy: false,
        }
    },
    methods: {
        getPlanInfo:function(id){

            let plan = storage.get('exp_plan_' + id);
            if(plan){
                this.plan = plan
                return
            }

            axios({
                method: 'get',
                url: `${API.plan}/${id}`,
            })
            .then( (response)=> {
                let plan = response.data;
                this.plan = plan
                console.log(plan)
                storage.set('plan_'+ id,plan,600*24);
            })
            .catch( (error)=> {
                this.$router.push('/')
            });
        },
        hasBuy:function(id){

            this.token && axios({
                method: 'get',
                url: `${API.plan}/my?plan_id=${id}`,
                headers: {
                    Authorization:`Bearer ${this.token}`
                }
            })
            .then( (response)=> {
              console.log(response.data)
                let is_buy = response.data.is_buy;
                this.is_buy = is_buy;
            })
            .catch( (error)=> {
                console.log(error)
            });
        },
        getMyCourse:function(id){

            this.token && axios({
                method: 'get',
                url: `${API.plan}/${id}/my-course`,
                headers: {
                    Authorization:`Bearer ${this.token}`
                }
            })
            .then( (response)=> {
                let mycourse = response.data;
                this.mycourse = mycourse;
                console.log(mycourse)
            })
            .catch( (error)=> {
                console.log(error)
            });
        }
    },
    components: {
        Loading,
        banner,
        serve,
        market,
        advantage,
        contact,
        help,
        try7day,
        course
    }
}
</script>

<style scoped lang="less">
.plan_page{
  padding-top: 60px;
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
