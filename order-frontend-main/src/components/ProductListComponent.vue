<template>
    <v-container>
        <v-row class="d-flex justify-content-between mt-5">
            <v-col>
                <v-form @submit.prevent="searchProducts">
                    <v-row>
                        <v-col cols="auto">
                            <v-select
                                v-model="searchType"
                                :items="searchOptions"
                                item-title="text"
                                item-value="value"
                                >
                                    
                            </v-select>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="searchValue"
                                label="Search"
                                >
                            </v-text-field>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn type="submit">검색</v-btn>
                        </v-col>

                    </v-row>
                </v-form>
            </v-col>

            <v-col cols="auto" v-if="!isAdmin">
                <v-btn color="secendary" class="mr-2">장바구니</v-btn>
                <v-btn color="danger">주문하기</v-btn>
            </v-col>
            <v-col cols="auto" v-if="isAdmin">

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
            searchType: "optional",
            searchOptions: [
                {text: "선택", value:'optional'},
                {text:"상품명", value:"name"},
                {text:"카테고리", value:"category"}


            ],
            searchValue:""
        }
        
    },
    methods:{
        searchProducts(){

        }
    }
}
</script>