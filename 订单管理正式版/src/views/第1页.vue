<script setup lang="ts">
import { pinia数据中心 } from '../stores/pinia数据';

let pinia = pinia数据中心()




</script>

<template>
    <div>
        <h1>第一页 图标</h1>

        <icon 图标名="icon-delete" 颜色="#666" font-size='100px' />
        <icon 图标名="icon-home" color="#666" />
        <icon 图标名="lmicon" 颜色="#666" />







    </div>
</template>


<style scoped>
div {
    display: grid;
    font-size: 50px;
    color: #25bf2f;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    gap: 5px;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    overflow: auto;
    background-color: #F0F2F5
}
</style>
