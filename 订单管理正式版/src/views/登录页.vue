<script setup lang="ts">

import { useRouter } from 'vue-router';
import { pinia数据中心 } from '@/stores/pinia数据';
import { socket } from "../stores/socket链接";

let pinia = pinia数据中心()
let router = useRouter()


function 登录() {
    socket.emit('登录验证', { 用户名: pinia.当前登录用户, 密码: pinia.密码, 手机号: '' }, (返回数据: any) => {

        console.log("登录验证" + 返回数据);

        if (返回数据 == "登录成功") {
            router.push("/1")
            localStorage.setItem("token", "通过")
            localStorage.setItem("当前登录用户", pinia.当前登录用户)
        }
        else if (返回数据 == "此用户名未注册") {

            alert(返回数据)
        }
        else if (返回数据 == "此用户名未注册") {
            alert(返回数据)
        }
        else
            alert(返回数据)
    })



}

</script>

<template>
    <input type="text" placeholder="用户名" v-model.lazy="pinia.当前登录用户">
    <input type="text" placeholder="密码" v-model.lazy="pinia.密码">
    <button plain @click="登录">提交</button>
</template>


<style scoped>
</style>
