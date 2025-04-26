<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" height="2000" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <!-- <router-link to="/">Go to Home</router-link> -->
    <!-- <router-link to="/about">Go to About</router-link> -->
    <!-- 更换标签 -->
    <router-link
      to="/about"
      custom
      v-slot="{navigate}"
    >
      <span @click="navigate">Go to About</span>
    </router-link>

  </p>
  <!-- 命名视图，相当于路由插槽 -->
  <!-- <router-view name="shopTop"></router-view> -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <!-- <router-view name="shopFooter"></router-view> -->
</template>

<script>
import store from "./store";
export default {
  provide: {
    store,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>