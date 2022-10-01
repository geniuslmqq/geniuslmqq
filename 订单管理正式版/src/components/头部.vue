<script setup lang="ts">

import { pinia数据中心 } from '../stores/pinia数据';
import { useRouter } from 'vue-router';

let pinia = pinia数据中心()
let router = useRouter()

let 退出登录 = () => {
  localStorage.removeItem("token");
  router.push("/login");
}




</script>

<template>
  <div class="头部">
    {{ pinia.当前登录用户 }}
    <button @click="退出登录"> 退出登录</button>
  </div>
</template>


<style scoped>
.头部 {
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #F0F2F5
}
</style>
