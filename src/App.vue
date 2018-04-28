<template>
    <div id="app">
        <Header :token="token" :user-info="userInfo"></Header>
        <div class="mainer">
            <router-view :token="token"/>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import axios from 'axios';
import storage from '@/utils/storage.js';
import API from '@/config/api.js';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    name: 'App',
    created () {
        this.getUserInfo();
    },
    mounted() {

    },
    data () {
        return {
            userInfo: {},
            token:''
        }
    },
    methods: {
        getUserInfo:function (){
            let token    = storage.get('token')
            let userInfo = storage.get('userInfo')

            token && (this.token = token)

            if(userInfo){
                this.userInfo = userInfo
            }else if(token){
                axios({
                    method: 'get',
                    url: API.userInfo,
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
                .then( (response)=> {
                    let userInfo = response.data;
                    storage.set('userInfo',userInfo)
                    this.userInfo = userInfo
                    console.log(userInfo)
                })
                .catch( (error)=> {
                    console.log(error)
                });
            }
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style type="text/css" lang="less">
    #app{
        min-height: 100%;
        display: flex;
        flex-direction: column;
        min-width: 1200px;
    }
    .mainer{
        flex: 1;
    }
</style>
