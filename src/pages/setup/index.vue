<template>
  <div>{{ num }}</div>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
  <button @click="AddClick">AddClick</button>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const num = ref(0);

// 使用生命周期
onMounted(() => {
  console.log('kkk');
});

const AddClick = () => {
  num.value += 1;
};
</script>
<style scoped></style>
