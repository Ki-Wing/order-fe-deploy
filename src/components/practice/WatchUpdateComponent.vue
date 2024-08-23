<template>
    <h1>watch 예제</h1>
    <div>count : {{count}}</div>
    <button @click="incrementCount">increment count</button>

    <h1>div update 예제</h1>
    <div>message : {{message}}</div>
    <button @click="updateMessage">update message </button>

</template>

<script>
export default{
    data(){
        return{
            count : 0,
            message: "hi"

        }
    },

    // 특정 변수값의 변경사항을 인지하는 hook 함수
    watch:{
            //인지하고자 하는 변수값과 일치되는 함수명

        count(){
            alert("count값 변경")
        }

    },

    // dom객체(화면 의미)의 변경사항을 인지하는 hook함수
    updated(){

    },
    // 내가 정의할 함수들
    methods:{
        incrementCount(){
            this.count++;
        },

        updateMessage(){
            this.message = "hiyena";
        }
    }
    
}

</script>