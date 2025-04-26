<template>
  <div>
    user
    <button @click="goHome">goHome</button>
    <!-- route 4 keep-alive 用法 -->
      <router-view></router-view>
  </div>
</template>
<script>
import { watch, watchEffect } from "vue";
import {
  useRouter,
  useRoute,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from "vue-router";
export default {
  setup() {
    // 获取路由器的实例
    const router = useRouter();
    // 当前路由实例
    // route是响应式对象，可监控变化
    const route = useRoute();

    // 不携带参数可以监听到路由
    watchEffect(() => {
      console.log(route.query);
    });

    // 组件守卫，离开当前路由前
    onBeforeRouteLeave((to, from) => {
      // const answer = window.confirm("你确定离开当前页面吗？");
      // if (!answer) {
      //   return false;
      // }
    });
    onBeforeRouteUpdate(() => {
      console.log("kkk");
    });

    const goHome = () => {
      router.push("/");
    };
    return {
      goHome,
    };
  },
};
</script>
<style scoped>
</style>