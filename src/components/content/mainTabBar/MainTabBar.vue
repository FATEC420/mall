<template>
  <Tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/cc-home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cc-home1.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category1.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/car" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/shop-car.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shop-car1.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile1.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </Tab-bar>
</template>

<script>
  import TabBar from "@/components/tabBar/TabBar";
  import TabBarItem from "@/components/tabBar/TabBarItem";
  export default {
      name:"MainTabBar",
      components:{
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
