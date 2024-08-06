<template>
    <v-container>
        <v-row class="d-flex justify-content-between mt-5">
            <v-col>
                <!-- <v-form @submit.prevent="searchProducts"> -->
                <v-form>
                    
                </v-form>
            </v-col>

            <v-col cols="auto">
                <v-btn>장바구니</v-btn>
                <v-btn>주문하기</v-btn>
            </v-col>
            <v-col cols="auto">

            <!-- <v-col cols="auto" v-if="isAdmin"> -->
                <v-btn href="/product/create" color="success">상품등록</v-btn>
                
            </v-col>
        </v-row>
    </v-container>


</template>

<script>
export default {
    data() {
        return{

        }
        
    },
}
</script>