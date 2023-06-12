<template>
  <div class="layout">
    <!-- 顶部导航 -->
    <div class="layout_tabbar">
      <Tabbar :tabbarList="useStore.menuRoutes[0].children"></Tabbar>
    </div>
    <div class="layout_container">
      <!-- 左侧内容区域 -->
      <div class="layout_main">
        <router-view></router-view>
      </div>
      <!-- 右侧标签区域 -->
      <div class="layout_category">标签区域</div>
    </div>
  </div>
</template>
<script setup lang="ts">
//引入顶部tabbar组件
import Tabbar from './tabber/index.vue'
import useUserStore from '@/store/modules/user'
//获取路由器对象
let useStore = useUserStore()
</script>

<style scoped lang="scss">
.layout {
  width: 60%;
  margin: auto;
  height: 100vh;
  background-color: pink;
  .layout_tabbar {
    width: 100%;
    height: 180px;
    margin: auto;
    padding-top: 60px;
    box-sizing: border-box;
    background-color: yellow;
  }
  .layout_container {
    display: flex;
    background-color: skyblue;
    .layout_main {
      flex: 2;
      background-color: blanchedalmond;
    }
    .layout_category {
      flex: 1;
      background-color: blue;
      float: right;
    }
  }
}
</style>
