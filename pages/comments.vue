<template>
    <div>
        <div class="box">
            <div class="title">Please leave a comment... Say Hi! :)</div>
            <form
                    id="app"
                    @submit.prevent="checkForm"
                    method="POST"
                >
                <div>
                    <input
                            id="nickname"
                            v-model="nickname"
                            placeholder="Nickname..."
                            type="text"
                            name="nickname"
                    >
                </div>
                <div>
                    <textarea
                            id="content"
                            v-model="content"
                            placeholder="Comment..."
                            type="text"
                            name="content"
                    ></textarea>
                </div>
                <div>
                    <input
                            type="submit"
                            value="Submit"
                            class="submit"
                    >
                </div>
            </form>
        </div>
        <div class="box">
            <div class="title-light">{{ comments.length }} comments</div>
            <table>
                <tbody>
                <tr v-for="comment in comments" :key="comment.id">
                    <td class="nickname">{{ comment.nickname }}</td>
                    <td class="content">{{ comment.content }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "comment",
        async asyncData ({ $axios }) {
            const comments = await $axios.$get('http://localhost:3030/api/comment/')
            return { comments }
        },
        data () {
            return {
                comments: null,
                nickname: null,
                content: null
            }
        },
        methods: {
            checkForm: function (event) {
                if (this.nickname && this.content) {
                    this.submitForm()
                } else {
                    alert("Nickname and Comment are required!")
                    event.preventDefault()
                }
            },
            submitForm: function () {
                axios
                    .post('http://localhost:3030/api/comment/', {
                        nickname: this.nickname,
                        content: this.content
                    })
                    .then((response) => {
                        console.log(response)
                        this.$router.push({ name: 'comments' })
                        this.$router.go()
                    })
                    .catch((error) => {
                        console.log('failed', error)
                    })
            }
        }
    }
</script>

<style scoped>
    form {
        margin: 1em;
    }
    input {
        margin: 1em;
    }
    textarea {
        width: 100%;
        height: 5em;
    }
    table {
        width: 100%;
    }
    tr {
        height: 2em;
    }
    .nickname {
        width: 30%;
    }
    .content {
        width: 70%;
        text-align: left;
    }
    .submit {
        width: 5em;
        height: 1.5em;
        color: #2c3e50;
        background-color: transparent;
        border-radius: 12px;
        border: 1px solid #2c3e50;
    }
    .submit:hover {
        background-color: #2c3e50;
        color: #FFFFFF;
    }
</style>