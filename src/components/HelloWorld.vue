<template>
  <div>{{ msg }}</div>
  <div>{{ count }}</div>
  <button @click="count += 1">+1</button>
  <div>{{ name }}</div>
  <h1>{{ age }}</h1>
  <h1>{{ fullInfo }}</h1>
  <button @click="changeName">改变年龄</button>
  <Life :msg="msg" :age="age"></Life>
  <Provide></Provide>
</template>

<script>
import { ref, reactive, toRefs, computed, watchEffect, watch, provide } from 'vue';
import Life from './Life.vue';
import Provide from './Provide.vue';
export default {
  props: {
    msg: String
  },
  components: {
    Life,
    Provide
  },
  beforeCreate() {
    console.log('j');
  },
  created() {
    console.log('kkkk1');
  },

  setup() {
    console.log('kkkk2');
    const count = ref(0);
    const user = reactive({
      name: 'mjq',
      age: 18,
      fullInfo: computed(() => {
        // return this.name + this.age; no
        return user.name + user.age; // ok
      }),
      changeName() {
        // 控制外部属性
        this.count++;
        // 控制内部属性
        // user.age++; ok
        this.age++; //ok
      }
    });
    // watchEffect(() => {
    //  自动判断
    //   // 监听 count值的变化
    //   console.log(count.value);
    //   console.log('fdfd');
    // });
    // 单独监听
    watch(count, (newValue) => {
      // 内部watch先执行
      // 监听 count值的变化
      console.log(newValue);
    });
    // 多个监听，newValue返回更新值的数组
    watch([count, user], (newValue) => {
      // 内部watch先执行
      // 监听 count和user值的变化
      console.log(newValue[1].age);
    });

    provide('user', user);

    // 注意是toRefs是响应式方法
    return { count, ...toRefs(user) };
  },
  // 外面的watich也可以监听到
  watch: {
    count() {
      // console.log('ddd');
    }
  }
};
</script>

<style scoped></style>
