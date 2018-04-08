<template>
    <div class="story-section">
        <div class="container">
            <h2>成长故事</h2>
            <ul class="story-list">
                <li>
                    <img src="./../../assets/images/github_default_avatar.png">
                    <p class="name">Mike</p>
                    <p class="desc">"Ultimately, Udacity is what really became the driving force behind the career change."</p>
                </li>
                <li>
                    <img src="./../../assets/images/github_default_avatar.png">
                    <p class="name">Mike</p>
                    <p class="desc">"Ultimately, Udacity is what really became the driving force behind the career change."</p>
                </li>
                <li>
                    <img src="./../../assets/images/github_default_avatar.png">
                    <p class="name">Mike</p>
                    <p class="desc">"Ultimately, Udacity is what really became the driving force behind the career change."</p>
                </li>
                <li>
                    <img src="./../../assets/images/github_default_avatar.png">
                    <p class="name">Mike</p>
                    <p class="desc">"Ultimately, Udacity is what really became the driving force behind the career change."</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index_story',
    data () {
        return {
            
        }
    },
}
</script>

<style scoped lang="less">
.story-section{

    h2{
        padding-top: 10px;
        line-height: 70px;
        height: 70px;
        text-align: left;
        font-size: 18px;
        color:#333;
    }

    .story-list{
        font-size: 0;

        li{
            display: inline-block;
            width: 242px;
            height: 381px;
            padding: 0 5px 45px;
            margin-right: 10px;
            background: #fff;
            border-radius: 4px;
            border-top: 6px solid #02b3e4;
            text-align: center;
            
            &:last-child{
                margin-right: 0;
            }

            img{
                display: block;
                width: 64px;
                height: 64px;
                border-radius: 50%;
                margin: 0 auto;
                transform: translateY(-50%);
            }
            .name{
                font-size: 28px;
                font-weight: 300;
                margin-bottom: 40px;
                color: #2e3d49;
            }
            .desc{
                padding: 0 20px 20px;
                font-size: 16px;
                line-height: 28px;
                color: #525c65;
            }

        }

    }
}
</style>
