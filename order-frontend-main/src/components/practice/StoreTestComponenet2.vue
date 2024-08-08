  <!-- router-view를 통해 app.vue에서 화면 라우팅 -->
  <template>
    <h1>store test componenet2</h1>
    <p>count : {{count}}</p>
    <v-btn color="red" @click="incrementCount">increment count</v-btn>
   </template>
   
   <script>

   export default {
      data(){
        return{
          count:0
        }
      },
      methods:{
        incrementCount(){
          // this.count++
          

        }
      }
     
   }
   </script>
   
   <style>
   
   </style>