<script setup lang="ts">
import { pinia数据中心 } from '../stores/pinia数据';
const 菜单 =pinia数据中心().菜单[0];
</script>

<template>

   <div>{{菜单}}</div>

</template>


<style scoped>
 div {
     display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: 1fr;
     gap: 5px;
     align-content: center;
     align-items: center;
     justify-content: center;
     justify-items: center;
     overflow: auto;
     background-color: #F0F2F5
 }
</style>
