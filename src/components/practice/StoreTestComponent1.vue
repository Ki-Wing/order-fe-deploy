  <!-- router-view를 통해 app.vue에서 화면 라우팅 -->
  <template>
<h1>store test component1</h1>
<StoreTestComponenet2></StoreTestComponenet2>
<StoreTestComponenet3></StoreTestComponenet3>
   </template>
   
   <script>
import StoreTestComponenet2 from '@/components/practice/StoreTestComponent2.vue'
import StoreTestComponenet3 from '@/components/practice/StoreTestComponent3.vue'

   export default {

     data(){

     },
     components:{
      StoreTestComponenet2,StoreTestComponenet3
     }
   }
   </script>
   
   <style>
   
   </style>