<template>
    <div class="box">
        <table>
            <tbody>
            <tr><nuxt-link class="cell" :to="{ name: 'category-category', params: { category: 'all' } }">All</nuxt-link></tr>
            <tr><nuxt-link class="cell" :to="{ name: 'category-category', params: { category: 'Dev' } }">Dev</nuxt-link></tr>
            <tr><nuxt-link class="cell" :to="{ name: 'category-category', params: { category: 'Film' } }">Film</nuxt-link></tr>
            <tr><nuxt-link class="cell" :to="{ path: 'comments' }">Comments</nuxt-link></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "categories",
        data () {
            return {
                param: this.$route.params
            }
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
    }
    tr {
    }
</style>