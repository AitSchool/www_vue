<template>
    <div class="hero-logo-circles" :style="{ width: size + 'px', height: size + 'px' }">
        <img class="hero-logo-circle" src="./../assets/images/logo-circles/hero-logo-circles-1.svg">
        <img class="hero-logo-circle" src="./../assets/images/logo-circles/hero-logo-circles-2.svg">
        <img class="hero-logo-circle" src="./../assets/images/logo-circles/hero-logo-circles-3.svg">
        <img class="hero-logo-circle" src="./../assets/images/logo-circles/hero-logo-circles-4.svg">
        <img class="hero-logo-circle" src="./../assets/images/logo-circles/hero-logo-circles-5.svg">
        <img class="hero-logo-circle" src="./../assets/images/logo-circles/hero-logo-circles-6.svg">
        <img class="hero-logo-circle" src="./../assets/images/logo-circles/hero-logo-circles-7.svg">
        <img class="hero-logo-circle" src="./../assets/images/logo-circles/hero-logo-circles-8.svg">
        <img class="hero-logo-circle" src="./../assets/images/logo-circles/hero-logo-circles-9.svg">
        <img class="hero-logo-circle" src="./../assets/images/logo-circles/hero-logo-circles-10.svg">
    </div>
</template>

<script>
export default {
    name: 'Atom-logo',
    data () {
        return {

        }
    },
    props: {
        size: {
            type: Number,
            default: 300
        }
    }
}
</script>

<style scoped lang="less">

.hero-logo-circles{
    position: relative;
    display: inline-block;
    width: 150px;
    height: 150px;
    background: url('./../assets/images/logo-circles/hero-logo-circles-0.svg') no-repeat center;
    background-size: 40% 40%;


    .hero-logo-circle{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        animation: hero-logo-circle 1s linear infinite;
        will-change: transform;

        &:nth-child(1) {
            animation-duration: 3s;
        }
        &:nth-child(2) {
            animation-duration: 4s;
        }
        &:nth-child(3) {
            animation-duration: 5s;
        }
        &:nth-child(4) {
            animation-duration: 6s;
        }
        &:nth-child(5) {
            animation-duration: 7s;
        }
        &:nth-child(6) {
            animation-duration: 8s;
        }
        &:nth-child(7) {
            animation-duration: 9s;
        }
        &:nth-child(8) {
            animation-duration: 10s;
        }
        &:nth-child(9) {
            animation-duration: 11s;
        }
        &:nth-child(10) {
            animation-duration: 12s;
        }

    }

    @keyframes hero-logo-circle{
        100% {
            transform: rotate(1turn);
        }
    }
}

</style>
