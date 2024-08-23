<!-- router-view를 통해 app.vue에서 화면 라우팅 -->
<template>
  <h1>store test component3</h1>
  <p>count : {{getCount}}</p>
  <p>Message : {{getMessage}}</p>
</template>
   
<script>
import {mapGetters} from 'vuex'

  export default {
    data(){
      return{
        count:0
      }
    },
    computed:{
    ...mapGetters(['getCount', 'getMessage'])
  },
  }
  </script>
  
