<template>
    <div class="box">
        <table>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <nuxt-link class="cell" :to="{ name: 'Post-id', params: { category: param.category, id: post.id } }">{{ post.title }}</nuxt-link>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "category-category",
        async asyncData({ $axios, params }) {
            console.log(params.category)
            const posts = await $axios.$get('http://localhost:3030/api/category/' + params.category)
            return { posts }
        },
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
    }
    tr {
        height: 3em;
    }
    .cell {
        vertical-align: middle;
        display: table-cell;
    }
</style>