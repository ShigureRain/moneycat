<template>
  <div class="nav">
    <router-link to="/details">明细</router-link>
    |
    <router-link to="/money">记账</router-link>
    |
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  //scoped会自动给class类加上属性名
  .nav {
    border: 1px solid red;
  }
</style>