<template>
    <div>
        <div class="box">
            <div class="title">Please leave a comment. Say Hi! :)</div>
            <div class="comment-box">
                <input v-model="nickname" placeholder="Nickname...">
                <textarea v-model="content" placeholder="Comment..."></textarea>
                <button @onclick="postComment(nickname, content)">Enter</button>
            </div>
        </div>
        <div class="box">
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
    export default {
        name: "comment",
        async asyncData ({ $axios }) {
            const comments = await $axios.$get('http://localhost:3030/api/comment/')
            return { comments }
        },
        data () {
            return {
                nickname: null,
                content: null
            }
        },
        methods: {
            postComment: ({ $axios }, nickname, content) => {
                $axios.$post('http://localhost:3030/api/comment/', {
                    nickname: nickname,
                    content: content
                })
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>
    input {
        margin: 1em;
        width: 50%;
        height: 1em;
    }
    textarea {
        width: 100%;
        height: 5em;
    }
    .comment-box {
        margin: 1em;
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
</style>