<template>
  <div>
    <ul class="types">
      <li :class="{selected:value==='-',[classPrefix+'-item'] :classPrefix}" @click="selectType('-')">支出</li>
      <li :class="{selected:value==='+',[classPrefix+'-item'] :classPrefix}" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    // type = '-';
    @Prop(String) readonly value!: string;    // @Prop(Number) xxx: number | undefined;
    // Prop 告诉 Vue  xxx不是data是prop
    // Number 告诉 Vue  运行时xxx是个Number
    // xxx 属性名
    // number | undefined 告诉ts 编译时xxx的类型
    // ts 可以提前报错，对比 js 增加了类型声明
    @Prop(String) classPrefix?: string;

    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.$emit('update:value', type);
      // this.type = type;
    }
  }
  // @Watch('type')
  // onTypeChanged(value:string) {
  //   this.$emit('update:value', value);
  // }
  // export default {
  //   name: 'Types',
  //   props: ['xxx'],
  //   data() {
  //     return {
  //       type: '-'  // '-'表示支出,'+'表示收入
  //     }
  //   },
  //   mounted() {
  //     console.log(this.xxx)
  //   },
  //   methods: {
  //     selectType(type) {
  //       if (type !== '-' && type !== '+') {
  //         throw new Error('type is unknown')
  //       }
  //       this.type = type
  //     }
  //   }
  // }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .types {
    @extend %outerShadow;
    background: $color-highlight;
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
        width: 60%;
        height: 2px;
        background: #515151;
      }
    }
  }
</style>