<script setup lang="ts">
import { pinia数据中心 } from '../stores/pinia数据';
import lmButton from "@组件/按钮.vue";

let pinia = pinia数据中心();


</script>

<template>
    <div>
        <h1>这是第二页</h1>

    </div>
</template>


<style scoped>
div {
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows: repeat(auto-fit, minmax(30px, 1fr));
    gap: 5px;
    align-content: flex-start;
    background-color: #F0F2F5
}
</style>
