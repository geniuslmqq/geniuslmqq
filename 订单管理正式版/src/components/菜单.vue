<script setup lang="ts">
import { pinia数据中心 } from "../stores/pinia数据";
import lmButton from "@组件/按钮.vue";
import { reactive, ref } from "vue";

//let 菜单列表 = reactive(pinia数据中心().菜单列表);


let 菜单列表 = [
    { 序号: "0", 目标页: "/", 内容: "主页", 图标: "icon-home" },
    { 序号: "1", 目标页: "/mr", 内容: "默认页", 图标: "icon-message" },
    { 序号: "2", 目标页: "/1", 内容: "1图标页", 图标: "icon-message" },
    { 序号: "3", 目标页: "/2", 内容: "2旧订页", 图标: "icon-message" },
    { 序号: "4", 目标页: "/3", 内容: "3测试页", 图标: "icon-message" },
    { 序号: "5", 目标页: "/4", 内容: "4第四页", 图标: "icon-message" },
    { 序号: "6", 目标页: "/5", 内容: "5旧订单", 图标: "icon-message" },
]









let 菜单展开开关 = ref(true);
</script>

<template>
    <div class="菜单" :style="[菜单展开开关 ? ' width:  100px' : 'width: 50px']">
        <lmButton v-for="按钮 in 菜单列表" :key="按钮.序号" :目标路径="按钮.目标页">
            <icon v-show="!菜单展开开关"  :图标名="按钮.图标"    color="#fff" font-size="30px" />
            <icon v-show="菜单展开开关"   图标名="icon-home"  color="#fff" font-size="20px" />
            <p v-if="菜单展开开关">{{ 按钮.内容 }}</p>
        </lmButton>
        <lmButton @click="菜单展开开关 = !菜单展开开关">{{ 菜单展开开关 ? "开" : "关" }}</lmButton>

    </div>
</template>

<style scoped>
.菜单 {
    display: grid;
    box-sizing: border-box;
    gap: 2px;
    width: 100px;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    align-content: start;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color: #f0f2f5;
    padding: 5px;
    transition: all 0.2s;
}

p {
    white-space: nowrap;
}

button {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr;
    box-sizing: border-box;
    border: 2px solid #79bbff;
    width: 100%;
    border-radius: 4px;
    padding: 4px 8px;
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    height: 30px;
    overflow: hidden;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color: #409EFF;
    transition: all 0.2s;
}

button:hover {
    background-color: #337ecc;
    border: 5px solid #337ecc;
}

button:active {
    background-color: #529b2e;
    border: 5px solid #67C23A;
}
</style>
