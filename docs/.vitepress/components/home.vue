<template>
    <div class="home-wrapper">
      <div v-for="item in list" :key="item" class="home-item" @click="changeBTN(item)">{{ item }}</div>
    </div>
  </template>

  <script >
  export default{
    data(){
      return{
        list :[1, 2, 3, 4, 5, 6, 7, 8, 9],
      }
    },
    methods:{
      changeBTN(val){
        console.log(val,"点击的某个标识div")
      }
    },
  }
  </script>

  <style scoped>
  .home-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .home-item {
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 4px 8px;
    font-weight: bolder;
    display: inline-block;
    cursor: pointer;
    border-radius: 2px;
    line-height: 13px;
    font-size: 13px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
  }
  </style>
