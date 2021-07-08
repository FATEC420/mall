<template>
  <swiper>
    <swiper-item v-for="(it, index) in banners" :key="index">
      <a :href="it.link">
        <img :src="it.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>