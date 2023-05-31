<template>
  <h1>Home</h1>
</template>
<script setup lang="ts">
import { reqLogin } from '@/api/user'

onMounted(() => {
  reqLogin({
    username: 'admin',
    password: '111111',
  })
})
</script>
<style scoped lang="scss"></style>
