<!-- router-view를 통해 app.vue에서 화면 라우팅 -->
<template>
  <h1>store test component2</h1>
  <p>count: {{ getCount }}</p>
  <v-btn color="red" @click="incrementCount">increment count</v-btn>

  <!-- <input type="text" v-model="message"> -->
  <input type="text" v-model="message" class="custom-input">
  <v-btn color="red" @click="updateMessage">update message</v-btn>

</template>
  
<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      count:0,
      message:""
    }
  },
  computed:{
    ...mapGetters(['getCount'])
  },
  methods:{
    incrementCount(){
      // this.count++
      this.$store.dispatch('incrementCount')

    },
    updateMessage(){
      this.$store.dispatch('updateMessage', this.message);

    }
  }

}
</script>

<style scoped>
.custom-input {
  background-color: blue;
}
</style>