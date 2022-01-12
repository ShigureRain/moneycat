<template>
  <div class="nav">
    <router-link to="/details">
      <Icon name="details"/>
      明细
    </router-link>
    |
    <router-link to="/money">
      <Icon name="money"/>
      记账
    </router-link>
    |
    <router-link to="/statistics">
      <Icon name="statistics"/>
      统计
    </router-link>
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