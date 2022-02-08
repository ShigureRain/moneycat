<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">
        <div class="word">{{ tag }}</div>
      </li>
      <li class="new">
        <button>
          <Icon name="add"/>
        </button>
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
      this.$emit('update:value', this.selectedTags);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .tags {
    $h: 60px;
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
          .word {
            border: $color-highlight solid 2px;
            display: flex;
            justify-content: center;
            line-height: 56px;
            color: $color-highlight;
          }
        }
        .icon {
          background: #ffffff;
          $h: 60px;
          width: $h;
          height: $h;
          border-radius: 50%;
          color: $color-highlight;
        }
        .word {
          background: #ffffff;
          font-size: 16px;
          width: $h;
          height: $h;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          line-height: $h;
          color: #999999;
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