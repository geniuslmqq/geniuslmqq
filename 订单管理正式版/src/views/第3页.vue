<script setup lang="ts">
import { pinia数据中心 } from '../stores/pinia数据';
import lmRow from "@组件/用户行.vue";
import lmB from "@组件/按钮.vue";
const pinia = pinia数据中心();

</script>

<template>
    <div>
        <h1>这是第三页 用户管理</h1>
        <div class="首行">
            <lmB>用户名</lmB>
            <lmB>密码</lmB>
            <lmB>手机号</lmB>
        </div>
        <lmRow></lmRow>
        <div class="列表">这是用户列表
            <p v-for="数据 in pinia.用户">{{ 数据 }}</p>
        </div>

    </div>
</template>


<style scoped>
.列表 {
   height: 200px;
}

div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40px 40px 1fr auto;
    gap: 2px;
    align-content: start;
    align-items: center;
    justify-content: center;
    justify-items: center;
    overflow: auto;
    background-color: #F0F2F5
}

.首行 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 210px;
    grid-template-rows: repeat(auto-fit, minmax(20px, 32px));
    gap: 5px;
    align-content: start;
    align-items: center;
    justify-content: center;
    justify-items: center;
    overflow: auto;
    background-color: #F0F2F5
}



</style>
