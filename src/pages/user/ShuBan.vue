<template>
  <div style="width: 600px;height: 1200px; background-color: rgb(191, 243, 161);">
    竖版
    <!-- 声明式跳转 -->
    <router-link to="/">首页</router-link>
    <button @click="goAbout">跳转about</button>
    <h1>{{count}}</h1>
    <button @click="count+=1">Add</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  methods: {
    goAbout() {
      // 编程式跳转
      // this.$router.push("/about")
      // 携带参数
      // this.$router.push("/news/123")
      // this.$router.push({ name: "news", params: { id: 123 } })
      // query,以问号形式的参数出现在url中
      this.$router.push({ path: "/", query: { search: "mjq" } });
    },
  },
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>
<style scoped>
</style>