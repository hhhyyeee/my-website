<template>
    <div class="box">
        <div class="title-light">{{ posts.length }} posts</div>
        <table>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <nuxt-link class="cell" :to="{ name: 'Post-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "category-category",
        async asyncData({ $axios, params }) {
            console.log(params)
            const posts = await $axios.$get('http://localhost:3030/api/category/' + params.category)
            return { posts }
        },
        data () {
            return {
                posts: null
            }
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
    }
</style>