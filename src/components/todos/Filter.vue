<template>
  <p class="filters">
    <span
      v-for="item in items"
      :key="item.value"
      @click="$emit('update:modelValue',item.value)"
      :class="{selected:modelValue===item.value}"
    >{{item.label}}</span>
  </p>
</template>

<script>
export default {
  props: ["items", "modelValue"],
  emits: ["update:modelValue"],
};
</script>

<style  scoped>
.filters span {
  display: inline-block;
  cursor: pointer;
  margin: 0 10px;
}
.selected {
  background: skyblue;
}
</style>