<template>
    <div class="loading-section">
        <div class="loading-container">
            <Atom class="atom" :size="logoSize"></Atom>
            <p class="text">加载中，请稍后</p>
        </div>
    </div>
</template>

<script>
import Atom from '@/components/Atom-logo.vue'
export default {
    name: 'Loading',
    created () {

    },
    data () {
        return {
            logoSize:100
        }
    },
    components: {
        Atom
    }
}
</script>

<style scoped lang="less">
.loading-container{
    display: inline-block;
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    background: rgba(57,62,68,.9);
    .text{
        position: absolute;
        line-height: 45px;
        width: 100%;
        text-align: center;
        bottom: -45px;
        left: 0;
        color: #4c4245;
        font-size: 14px;
        font-weight: 600;
    }
}
</style>
