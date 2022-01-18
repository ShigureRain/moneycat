<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" :class="{selected: selectedTags.indexOf(tag)>=0}" @click="toggle(tag)">
        <Icon name="canyin"/>
        <div class="word">{{ tag }}</div>
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
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop() dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
    }
  }
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
        &.selected {
          .icon {
            border: $color-highlight solid 2px;
            padding: 10px;
          }
          .word {
            color: $color-highlight;
          }
        }
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