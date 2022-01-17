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
      <li>
        <Icon name="jiaotong"/>
        <div class="word">交通</div>
      </li>
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
      <li>
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
      <li class="new">
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
    margin-left: 8px;
    margin-right: 8px;
    height: 100%;
    overflow-y: auto;
    font-size: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    color: #333;
    > .current {
      padding-top: 24px;
      display: grid;
      flex-wrap: wrap;
      justify-content: center;
      grid-template-columns: repeat(auto-fill, 80px);
      > li {
        flex-direction: column;
        display: flex;
        margin: 10px;
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
          padding: 6px 15px 0 15px;
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
    }
  }
</style>