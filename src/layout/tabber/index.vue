<template>
  <div class="tabbar">
    <div class="website-name">
      <h1>vue3+ts个人博客实现</h1>
      <p class="description">记录个人生活内容</p>
    </div>
    <div class="nav">
      <div id="nav-menu">
        <template v-for="(item, index) in tabbarList" :key="item.path">
          <span class="active" :index="index" @click="goRoute(item.path)">
            {{ item.meta.title }}
          </span>
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.tabbar {
  width: 100%;
  // height: 100%;
  background-color: red;
  justify-content: space-between;

  .website-name {
    margin-left: 20px;
    h1 {
      font-size: 37.5px;
      font-weight: bold;
      color: #555;
    }
    p {
      margin-top: 10px;
      color: #999;
    }
  }
  .nav {
    margin-top: 20px;
    #nav-menu {
      display: flex;
      justify-content: end;
      align-items: center;
      span {
        height: 32px;
        line-height: 32px;
        text-align: center;
        width: 60px;
        border: blue 1px solid;
        &.active {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
<script setup lang="ts">
//获取路由器对象
let $router = useRouter()

defineProps(['tabbarList'])

const goRoute = (path: any) => {
  $router.push(path)
}
</script>
