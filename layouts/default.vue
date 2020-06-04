<template>
    <div id="app">
        <div class="box">
            <div class="title"><nuxt-link to="/">Andrea</nuxt-link></div>
        </div>
        <div class="box">
            <table>
                <tbody>
                <tr>
<!--                    <td><nuxt-link :to="{ name: 'category-category', params: { category: 'all' } }">All</nuxt-link></td>-->
                    <td><nuxt-link :to="{ name: 'category-category', params: { category: 'Dev' } }">Dev</nuxt-link></td>
                    <td><nuxt-link :to="{ name: 'category-category', params: { category: 'Film' } }">Film</nuxt-link></td>
                    <td><nuxt-link to="/categories">Categories</nuxt-link></td>
                    <td><nuxt-link to="/about">About</nuxt-link></td>
                </tr>
                </tbody>
            </table>
        </div>
        <Nuxt />
    </div>
</template>

<style>
    table {
        width: 100%;
    }
    td {
        width: 25%;
        height: 1.5em;
    }
</style>