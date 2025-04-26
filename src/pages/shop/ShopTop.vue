<template>
  <h1>ShopTop头部</h1>
  <h2>{{store.state.message}}</h2>
</template>
<script>
  import { inject } from 'vue';
  import axios from 'axios';
  export default {
    setup() {
      // console.log(store);
      const store = inject("store")
      // axios.get("/api/web201605/js/herolist.json").then(res => {
      //   console.log(res);
      // })
      axios.get("/user/userinfo").then(res => {
        console.log(res);
      })
      return { store }
    }
  }
</script>