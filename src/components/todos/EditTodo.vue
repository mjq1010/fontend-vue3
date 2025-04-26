<template>
  <!-- 新增todo -->
  <input
    type="text"
    :value="modelValue"
    @input="OnInputChange"
  />
</template>
<script>
export default {
  props: {
    // 默认v-model绑定的值
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    OnInputChange(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>