<template>
  <h1>ShopMain主要内容</h1>
  <router-link to="/shop?abc=123">跳转更新路由</router-link>
</template>
<script>
  export default {
    beforeRouteEnter(to, from, next) {
      // ...
      console.log("进入路由组件");
      next()
    },
    beforeRouteUpdate(to, from, next) {
      // 当路由参数发生改变时执行
      console.log("路由更新组件");
      next()
    },
    beforeRouteLeave(to, from, next) {
      // ...
      console.log("离开路由组件");
      next()
    }
  }
</script>