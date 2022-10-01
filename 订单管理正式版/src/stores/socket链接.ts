import { io } from "socket.io-client";

//export let socket = io("ws://work.lmgwr.com:8081");  // 创建一个socket实例 网址没备案
export let socket = io("ws://120.53.103.135:8081");  // 创建一个socket实例


socket.on("connect", () => {
    console.log("socket已连接成功");
});
socket.on("disconnect", () => {
    console.log("链接断开"); // false
});
socket.on("广播", data => {
    console.log(`收到广播:${data}`);
})