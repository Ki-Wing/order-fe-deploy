<template>
    <v-container>
        <v-row justify="center">   
            <v-col cols="12" sm="6" md="8">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        로그인
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="doLogin">
                            <v-text-field label="Email" v-model="email" type="email" prepend-icon="mdi-email" required>
                            </v-text-field>
                            <v-text-field label="Password" v-model="password" type="password" prepend-icon="mdi-lock" required>
                            </v-text-field>
                            <v-row>
                                <v-col cols="6">
                                    <v-btn block type="button" color="red" @click="changePassword">비밀번호 변경</v-btn>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn block type="submit" color="red">로그인</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async doLogin() {
            try {
                const loginData = {
                    email: this.email,
                    password: this.password
                };
                const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member/doLogin`, loginData);
            
                const token = response.data.result.token;
                const refreshToken = response.data.result.refreshToken;

                console.log(jwtDecode(token));
                const role = jwtDecode(token).role;
                localStorage.setItem('token', token);
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('role', role);
                // this.$router.push("/");
                window.location.href= "/";
            }catch(e){
                    const error_message = e.response.data.error_message;
                    console.log(error_message);
                    alert(error_message);
                }
        },
        changePassword() {
            alert("비밀번호 변경 기능은 아직 구현되지 않았습니다.");
        }
    }
}
</script>
