<template>
    <div class="login">
        <div class="page-loading">
            <div class="loading-container">
                <Atom></Atom>
                <p class="loading-text">登录中，请稍后</p>
            </div>
        </div>
    </div>
</template>

<script>
import Atom from '@/components/Atom-logo.vue'
import axios from 'axios';
import storage from '@/utils/storage.js';
import API from '@/config/api.js';

export default {
    name: 'login_page',
    created () {
        let code  = this.$route.query.code;
        if(!code){
            this.$router.push({ name: 'index_page' })
            return
        }
        console.log(API.login)
        axios({
            method: 'POST',
            url: API.login,
            data:{
                name: 'github',
                code
            }
        })
        .then((response) =>{
            let token = response.data.token;
            storage.set('token',token)
            window.location.href = "/"
        })
        .catch((error) =>{
            alert('登录失败');
            console.log(error,'登录失败')
            // this.$router.push({ name: 'index_page' })
        });
    },
    data () {
        return {

        }
    },
    components: {
        Atom
    }
}
</script>

<style scoped lang="less">
    .page-loading{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #36383b;

        .loading-container{
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 22px;
            text-align: center;
            color: #efdab9;

            .loading-text{
                margin-top: 40px;
            }
        }
    }
</style>
