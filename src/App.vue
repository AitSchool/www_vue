<template>
    <div id="app">
        <Header></Header>
        <div class="mainer">
            <router-view/>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    name: 'App',
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
