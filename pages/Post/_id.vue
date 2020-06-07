<template>
    <div class="box">
        <div class="post-title">{{ post[0].title }}</div>
        <div class="post-content">{{ post[0].content }}</div>
        <br/>
        <nuxt-link :to="{ name: 'category-category', params: { category: post[0].category } }">Back</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "Post-id",
        async asyncData({ $axios, params }) {
            console.log(params)
            const post = await $axios.$get('http://localhost:3030/api/post/' + params.id)
            return { post }
        },
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
    .post-title {
        margin-bottom: 2em;
    }
    .post-content {
        white-space: pre-line;
        text-align: left;
    }
    a {
        height: 1.5em;
        color: #2c3e50;
        background-color: transparent;
        border-radius: 5px;
        border: 1px solid #2c3e50;
    }
    a:hover {
        background-color: #2c3e50;
        color: #FFFFFF;
    }
</style>