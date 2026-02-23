<template>
    <div>
        <input type="text" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password" />
        
        <button @click="login">로그인하기</button>
        <div>
            계정이 없으신가요?
            <span>가입하기</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"LoginPage",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            console.log("이메일:", this.email);
            console.log("비밀번호:", this.password);
        }, 
    },
};
</script>

<style>

</style>