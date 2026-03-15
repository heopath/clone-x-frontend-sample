<template>
    <div>
        <div class="logo-container">
            <img src="@/assets/x-logo.png" class="logo" />   
        </div>
        <InputField 
        :type="'Email'" 
        :placeholder="'Email'" 
        v-model="email"
        :errorMsg="'이메일을 입력하세요'"
        />
        <InputField 
        :type="'password'" 
        :placeholder="'Password'" 
        v-model="password"
        :errorMsg="'비밀번호를 입력하세요'"
        />
        
        <button class="button" @click="login">로그인하기</button>
        <div>
            계정이 없으신가요?
            <router-link class="signup-button" to="/signup">가입하기</router-link>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '@/store/user';
import { api } from '@/api'
import InputField from '../components/InputField.vue';

export default {
    name:"LoginPage",
    components: {
        InputField,
    },
    data() {
        return {
            UserStore: useUserStore(),
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            if(!this.email || !this.password) {
                alert('모든 필드를 입력해주세요.')
                return
            }
            const payload = {
                email : this.email,
                password : this.password
            }
            try {
                const response = await api.post("/users/login", payload)
                console.log("로그인 성공")
                this.UserStore.setUser(response.data)
                this.UserStore.saveToken(response.data.access_token)
            }catch(error) {
                console.error("로그인 실패", error)
                console.error("응답 상태", error.response?.status);
                console.error("응답 데이터", error.response?.data);
                alert("로그인 실패!! 다시 시도해 주세요.")
            }
            this.$router.push('/main');
        }, 
    },
};
</script>

<style scoped>
.login-button {
        border-radius: 20px;
        border: 1px solid white;
        font-size: 15px;
        font-weight: bold;
        margin: 10px 0px;
        padding: 10px;
        width: 100%;
        cursor: pointer;
}

.signup-button {
        color: aqua;
        cursor: pointer;
}
</style>