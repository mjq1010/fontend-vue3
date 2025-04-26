<template>
  <h1 style="color: red">
    {{ msg + age }}
  </h1>
  <h1 style="color: blue">描述{{ des }}</h1>
</template>
<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
export default {
  props: ['msg', 'age'],
  // 获取父组件传递的值
  created() {
    console.log('ggg');
  },
  // 这里的生命周期函数最后一个会覆盖前一个，不可重复
  created() {
    console.log('kkk');
  },
  setup({ msg, age }) {
    const des = ref(age + ':' + msg);
    // setup 生命周期,可以写多个相同的生命周期函数
    onBeforeMount(() => {
      console.log(1);
    });
    onBeforeMount(() => {
      console.log(111);
    });
    onMounted(() => {
      console.log(2);
    });
    onBeforeUpdate(() => {
      console.log(3);
    });
    onUpdated(() => {
      console.log(4);
    });
    onBeforeUnmount(() => {
      console.log(5);
    });
    onUnmounted(() => {
      console.log(6);
    });
    return { des };
  }
};
</script>
<style scoped></style>
