<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(it, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itClick(index)"
    >
      <span>{{ it }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  line-height: 40px;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: hotpink;
}
.active span {
  border-bottom: 3px solid hotpink;
}
</style>