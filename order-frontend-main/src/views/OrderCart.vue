<template>
<v-container>
    <v-row justify="center">
        <v-col class="text-center text-h5">
            장바구니 목록
        </v-col>
    </v-row>
    <v-row justify="space-between">
        <v-col cols="auto" >
            <v-btn color="red" >장바구니 비우기</v-btn>
        </v-col>
        <v-col cols="auto"></v-col>
        <v-btn  color="blue">주문하기 </v-btn>
    </v-row>
    <v-row>
        <v-col>
            <v-table>
                <thead>
                    <tr>
                        <td>제품ID</td>
                        <td>제품명</td>
                        <td>주문수량</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in productList" :key="product.id">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.quantity}}</td>
                        
                    </tr>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
</v-container>


</template>


<script>
export default {
    data(){
        return{
            productList:[]

        }
    }
}
</script>