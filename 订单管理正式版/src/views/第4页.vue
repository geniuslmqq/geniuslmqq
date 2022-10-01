<script setup lang="ts">
import { pinia数据中心 } from '../stores/pinia数据';
import lmInput from "@组件/行.vue";
import lmSH from "@组件/首行.vue";
import lmButton from "@组件/按钮.vue";
import lmWin from "@组件/添加订单窗口.vue";
import { onMounted,ref } from 'vue';




let pinia = pinia数据中心();
pinia.获取旧订单();
// pinia.$subscribe((args: any) => {
//   if (args.events.key !== "旧订单") {
//     console.log('id', args.events.target._id)
//     console.log('key', args.events.key)
//     console.log('新值', args.events.newValue)
//     console.log('旧值', args.events.oldValue)
//   }
// }, { detached: true })

let 添加订单窗口开关 = ref(false)
let 添加订单=()=>{
  pinia.添加订单窗口开关 = !pinia.添加订单窗口开关
  console.log('添加订单');
}

</script>

<template>

  <div class="第四页">
    <div class="第一行">
      <!-- <div class="弹窗" v-if="添加订单窗口开关"> <lmButton @click="添加订单窗口开关=false">关闭窗口</lmButton></div> -->
      <lmWin v-if="pinia.添加订单窗口开关"></lmWin>

      <h1>这是第四页</h1>
      <input type="text" v-model="pinia.要搜索的值" @focus="pinia.行的属性 = '全局'">
      <lmButton @click="pinia.获取旧订单">获取旧订单</lmButton>
      <input v-model.lazy="pinia.旧订单每页显示的数量">
      <lmButton>一共有 {{ pinia.通过筛选的数量 }} 条数据通过筛选</lmButton>
      <lmButton>当前显示 {{ pinia.要显示的订单.length }} 条数据</lmButton>
      <lmButton @click="添加订单">添加订单 </lmButton>
    </div>
    <div>{{ pinia.旧订单搜索属性与值 }}</div>
    <div> {{ pinia.旧订单的所有属性 }}</div>

    <div class="表格外">
      <lmSH></lmSH>

      <div class="表格">
        <lmInput v-for="行 in pinia.要显示的新订单" :行=行></lmInput>
      </div>

    </div>
    <div class="分页整体">
      <lmButton class="分页按钮"> 这是第{{ pinia.当前页 }}页</lmButton>
      <!-- <button v-for="(页, index) in pinia.页数" :key="页" @click='pinia.当前页=pinia.页数[index]'>{{ 页 + 1 }}</button> -->
      <!-- v-for 循环数组必须有 index 且必须使用 不然循环不了  而且index不能用中文名 -->
      <div class="分页">
        <lmButton v-for="(页, index) in pinia.页数" @click="pinia.当前页 = index + 1">{{ 页 }}</lmButton>
      </div>
      <lmButton class="分页按钮">一共有{{ pinia.页数 }}页</lmButton>
    </div>
  </div>

</template>


<style scoped>
.第四页 {
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  grid-template-rows: 50px 50px 50px 1fr auto;
  grid-template-columns: 100%;
  align-content: start;
  align-items: start;
  background-color: #F0F2F5;
  position: relative;
  gap: 0px;
}
/* .弹窗{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  transform:translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  z-index: 1;
} */

/* 滚动条整体 */
.表格::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}

/* 两个滚动条交接处 -- x轴和y轴 */
.表格::-webkit-scrollbar-corner {
  background-color: transparent;
}

/* 滚动条滑块 */
.表格::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.2);
  background: #535353;
}

/* 滚动条轨道 */
.表格::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.455);
}



.第一行 {
  display: grid;
  height: 50px;
  gap: 10px;
  grid-auto-flow: column;
  background-color: #F0F2F5
}

.表格 {
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  grid-auto-flow: row;
  overflow: auto;
  overflow-y: scroll;
}
.表格外 {
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  grid-auto-flow: row;
  overflow: auto;

}








.分页整体 {
  gap: 2px;
  grid-auto-flow: row;
  grid-template-columns: 95px 1fr 95px;
}

.分页 {
  gap: 2px;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
}

.分页按钮 {
  height: 100%;
  width: 95px;
}
</style>
