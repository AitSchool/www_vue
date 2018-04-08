<template>
    <div class="index_page">
        <banner></banner>
        <blog></blog>
        <plan></plan>
        <serve></serve>
        <intro></intro>
        <story></story>
        <contact></contact>
    </div>
</template>

<script>
import banner from './banner'
import blog   from './blog'
import plan   from './plan'
import serve  from './serve'
import intro  from './intro'
import story  from './story'
import contact from './contact'


export default {
    name: 'index_page',
    data () {
        return {

        }
    },
    components: {
        banner,
        blog,
        plan,
        serve,
        intro,
        story,
        contact
    }
}
</script>

<style scoped lang="less">
.index_page{
    background: #f5f5f5;
}
</style>
