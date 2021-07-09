<template>
  <!-- querySelector获取元素不准确，需要加上ref -->
  <div class="wrapper" ref="wrapper">
    <div><slot></slot></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {});
  },
};
</script>

<style scoped>
</style>