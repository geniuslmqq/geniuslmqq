<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

//接收参数
let { 行 } = defineProps({
  行: {
    type: Object,
    default: '空',
  }
})
let 旺旺名显示开关 = ref(false)
let 姓名显示开关 = ref(false)
let 下单日显示开关 = ref(false)



</script>

<template>
  <div class="行">
    <input type="text" v-model.lazy="行._id">

    <div class="单元格" @mouseleave="旺旺名显示开关 = false">
      <input type="text" @click="旺旺名显示开关 = true" v-model.lazy="行.旺旺名">
      <div class="下滑菜单" v-if="旺旺名显示开关">旺旺名显示开关</div>
    </div>

    <div class="单元格" @mouseleave="姓名显示开关 = false">
      <input type="text" @click="姓名显示开关 = true" v-model.lazy="行.收件人">
      <div class="下滑菜单" v-if="姓名显示开关">
        <div>姓名显示开关</div>
        <div>姓名显示开关</div>
        <div>姓名显示开关</div>
        <div>姓名显示开关</div>
      </div>
    </div>

    <div class="单元格">
      <input type="text" @click="下单日显示开关 = !下单日显示开关" v-model.lazy="行.镜片下单日">
      <div class="下滑菜单" v-if="下单日显示开关">
        <div>姓名显示开关</div>
        <div>姓名显示开关</div>
        <div>姓名显示开关</div>
        <div>姓名显示开关</div>
      </div>
    </div>

    <input type="text" v-model.lazy="行.镜片">
    <input type="text" v-model.lazy="行.右近视">
    <input type="text" v-model.lazy="行.右散光">
    <input type="text" v-model.lazy="行.右轴向">
    <input type="text" v-model.lazy="行.左近视">
    <input type="text" v-model.lazy="行.左散光">
    <input type="text" v-model.lazy="行.左轴向">
    <input type="text" v-model.lazy="行.备注">

  </div>
</template>


<style scoped>
.行 {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(5, 1fr) repeat(6, 50px)  1fr;
  grid-template-rows: 25px;
  align-content: flex-start;
  background-color: #F0F2F5






  /* display: grid;
  width: 100%;
  grid-auto-flow: column;
  align-content: flex-start;
  grid-template-columns: repeat(5, 1fr) repeat(6, 50px)  1fr ;
  grid-gap: 2px;

  grid-template-rows: 25px;
  background-color: #F0F2F5 */
}

input {

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 0.5px solid rgb(225, 225, 225);
  border-radius: 5px;
  background-color: #F0F2F5;
  margin: 0;
}

input[type="text"] {
  text-align: center;
}

input:hover {
  box-sizing: border-box;
  border: 0.5px solid rgb(36, 168, 0);
}

input:focus {
  outline: none;
  box-shadow: 0px 0px 3px 1px rgb(50, 216, 4);
  z-index: 99;

}

.单元格 {
  position: relative;
}

.下滑菜单 {
  display: grid;
  gap: 5px;
  position: absolute;
  border-radius: 5px;
  background-color: #F0F2F5;
  box-shadow: 0px 0px 3px 1px rgb(50, 216, 4);
  height: auto;
  top: 35px;
  z-index: 5;
}

button {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(auto-fit, minmax(30px, 1fr));
  box-sizing: border-box;
  border: 2px solid #67C23A;
  width: 100%;
  border-radius: 4px;
  padding: 4px 8px;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  height: 40px;
  overflow: hidden;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #67C23A;
  transition: all 0.2s;
}

button:hover {
  background-color: #95d475;
  border: 5px solid #95d475;
}

button:active {
  background-color: #529b2e;
  border: 5px solid #67C23A;
}
</style>
