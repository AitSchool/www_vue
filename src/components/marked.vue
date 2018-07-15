<template>
    <div class="content-style" v-html="compiledMarkdown"></div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

export default {
    name: 'Marked',
    data () {
        return {

        }
    },
    props: {
        content: {
            type: String,
            default: ''
        }
    },
    computed:{
        compiledMarkdown: function () {
          return marked(this.content, { sanitize: true })
        }
    },
}
</script>

<style scoped lang="less">

</style>
