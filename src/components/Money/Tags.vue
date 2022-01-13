<template>
  <div class="tags">
    <ul class="current">
      <li>
        <Icon name="canyin"/>
        <div class="word">餐饮</div>
      </li>
      <li>
        <Icon name="gouwu"/>
        <div class="word">购物</div>
      </li>
      <li>
        <Icon name="juzhu"/>
        <div class="word">居住</div>
      </li>
      <li class="right">
        <Icon name="jiaotong"/>
        <div class="word">交通</div>
      </li>
      <li>
        <Icon name="yule"/>
        <div class="word">娱乐</div>
      </li>
      <li>
        <Icon name="yiliao"/>
        <div class="word">医疗</div>
      </li>
      <li>
        <Icon name="shejiao"/>
        <div class="word">社交</div>
      </li>
      <li class="new right">
        <button>
          <Icon name="add"/>
        </button>
        <div class="word">添加</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .tags {
    font-size: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    color: #515151;
    > .current {
      padding-top: 100px;
      width: 300px;
      display: flex;
      flex-wrap: wrap;
      margin: auto;
      > li {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        .icon {
          background: #ffffff;
          font-size: 30px;
          $h: 60px;
          width: $h;
          height: $h;
          border-radius: 50%;
          padding: 12px;
          color: $color-highlight;
        }
        .word {
          padding: 6px 15px 20px 15px;
        }
      }
      .new {
        button {
          background: transparent;
          border: none;
          .icon {
            padding: 13px 13px 11px 11px;
          }
        }
      }
      .right {
        margin-right: -20px;
      }
    }
  }
</style>