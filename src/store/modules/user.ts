import { constantRoute } from '@/router/router'
import { defineStore } from 'pinia'

const useUserStore = defineStore('User', {
  //存储数据
  state: () => {
    return {
      menuRoutes: constantRoute, // 生成菜单需要的路由
    }
  },
  //异步|逻辑
  actions: {},
  getters: {},
})

export default useUserStore
