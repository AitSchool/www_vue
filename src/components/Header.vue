<template>
    <header>
        <div class="container">
            <div class="hd-logo">
                <router-link :to="{ name:'index_page'}">
                    <img src="./../assets/images/aitschool-M1.svg" alt="logo">
                </router-link>
            </div>
            <div class="login-contain">
                <a v-if="userInfo.name && token">
                    <img class="avatar" :src="userInfo.github_avatar_url" alt="avatar">
                </a>
                <a v-else :href="github_login_url">
                    <img class="avatar" src="./../assets/images/github_default_avatar.png" alt="avatar">
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    created () {

    },
    props: {
        userInfo: {
            type: Object,
            default: {}
        },
        token: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            github_login_url: 'https://github.com/login/oauth/authorize?client_id=0afe04184c7f3628940d&redirect_uri=https%3A%2F%2Fwww.aitschool.com%2Flogin%2Foauth%2Fcallback%2Fgithub&scope=user%3Aemail%2Crepo%2Cuser%2Cgist&response_type=code'
        }
    }
}
</script>

<style scoped lang="less">
    header{
        background: #fff;
        border-bottom: 1px solid #e4e4e4;
        .container{
            position: relative;
            width: 1000px;
            margin: 0 auto;
            height: 60px;

            .hd-logo{
                padding-top: 10px;
                img{
                    height: 40px;
                }
            }


            .login-contain{
                display: inline-block;
                position: absolute;
                top: 20px;
                right: 0;
                height: 60px;
                width: 60px;
                text-align: right;
                >a{
                    display: block;
                    height: 100%;
                }
                .avatar{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    box-shadow: 8px 10px 20px 0px rgba(46,61,73,0.15);
                    transition: box-shadow 0.3s ease;
                    background: #fff;
                    &:hover{
                        box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
                    }
                }
            }
        }
    }
</style>
