<template>
    <div id="app">
        <div class="box">
            <div class="title">Latest Posts</div>
            <ul class="post-list" v-for="post in posts" :key="post.id">
                <li><nuxt-link :to="{ name: 'Post-id', params: { id: post.id } }">{{ post.title }}</nuxt-link></li>
            </ul>
            <div class="title-light"><nuxt-link :to="{ name: 'category-category', params: { category: 'all' } }"> > View More < </nuxt-link></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'App',
        async asyncData({ $axios, params }) {
            console.log(params)
            const posts = await $axios.$get('http://localhost:3030/api/post/latest')
            return { posts }
        },
        data () {
            return {
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .box {
        width: 50%;
        margin: auto;
        padding-top: 2em;
        padding-bottom: 2em;
        border-bottom: solid 1px #2c3e50;
    }
    .title {
        margin: 1em;
        font-weight: bold;
    }
    .title-light {
        margin: 1em;
        font-style: italic;
    }
    img {
        width: 70%;
        max-width: 500px;
        padding: 1em;
    }
    .post-list {
        padding: 2px;
    }
    a:link {
        color: #2c3e50;
        background-color: transparent;
        text-decoration: none;
    }
    a:visited {
        color: #2c3e50;
        background-color: transparent;
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
</style>