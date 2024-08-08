<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-h5">
                        상품등록
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="productCreate">
                            <v-text-field
                            label="상풍명"
                            v-model="name"
                            required
                            ></v-text-field>
                            <v-text-field
                            label="카테고리"
                            v-model="category"
                            required
                            ></v-text-field>
                            <v-text-field
                            label="가격"
                            v-model="price"
                            required
                            ></v-text-field>
                            <v-text-field
                            label="재고"
                            v-model="stockQuantity"
                            required
                            ></v-text-field>
                            <v-file-input
                            label="상품이미지"
                            accept="image/*"
                            @change="fileUpdate"
                            required></v-file-input>
                            <v-btn type="submit" color="red" block>등록</v-btn>
                    
                        </v-form>
                            <!-- accept 제한 (이미지만 받겠다) -->
                            <!-- @change : 변경 되면 -->
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script>
import axios from 'axios';

export default {
    data() {
        return{
            name:"",
            category:"",
            price:null,
            stockQuantity:null,
            productimage:null
        }
    },
    methods:{
        async productCreate(){
            try{
                let registerData = new FormData();
                registerData.append("name", this.name);
                registerData.append("category", this.category)
                registerData.append("price", this.price)
                registerData.append("stockQuantity", this.stockQuantity);
                registerData.append("productimage", this.productimage)

                await axios.post(`${process.env.VUE_APP_API_BASE_URL}/product/create`, registerData);
                this.$router.push("/");

            }catch(e){
                alert("상품 등록 실패!")
            }
                
        },
        fileUpdate(event){
            this.productimage = event.target.files[0];
        }
    }
}

</script>
