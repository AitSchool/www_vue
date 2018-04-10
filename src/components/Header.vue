<template>
    <header>
        <div class="container">
            <div class="hd-logo">
                <a href="/">
                    <img src="./../assets/images/aitschool-M1.svg" alt="logo">
                </a>
            </div>
            <div class="login-contain">
                <a href="https://github.com/login/oauth/authorize?client_id=" target="_self">
                    <img class="avatar" src="./../assets/images/github_default_avatar.png" alt="avatar">
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            github_login_url: 'https://github.com/login/oauth/authorize?client_id=',
            default_avatar: ''
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
                width: 120px;
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
