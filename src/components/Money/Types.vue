<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Types'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .types {
    @extend %outerShadow;
    background: #f6c84c;
    display: flex;
    justify-content: center;
    font-size: 24px;
    > li {
      width: 30%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: #333;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        height: 2px;
        background: #515151;
      }
    }
  }

</style>