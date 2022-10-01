<script setup lang="ts">
import { RouterView } from 'vue-router';
import { pinia数据中心 } from '@/stores/pinia数据';
import { computed } from 'vue';
let pinia = pinia数据中心()
console.log("页面已加载")
pinia.获取旧订单();
console.log("旧订单已获取")
pinia.获取用户();
console.log("用户已获取")



</script>

<template >
    <RouterView name="主页" />
</template>
