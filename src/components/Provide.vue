<template>
  <h1 style="color: yellow">{{ name + age }}</h1>
</template>
<script>
import { inject, toRefs } from 'vue';
export default {
  setup() {
    // 注入
    const user = inject('user');
    return { ...toRefs(user) };
  }
};
</script>
<style scoped></style>
