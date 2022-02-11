<template>
  <Layout>
    <Tabs :data-source="typeList" :value.sync="type" class-prefix="type"/>
    <Tabs :data-source="intervalLIst" :value.sync="interval" class-prefix="interval"/>
    <div>
      type:{{ type }}
      <br/>
      interval:{{ interval }}
    </div>
  </Layout>
</template>

<script lang="ts">
  import Types from '@/components/Money/Types.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';

  @Component({
    components: {Tabs, Types},
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    intervalLIst = [{text: '天', value: 'day'},
      {text: '周', value: 'week'},
      {text: '月', value: 'mouth'}
    ];
    typeList = [
      {text: '支出', value: '-'},
      {text: '收入', value: '+'},
    ];
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  ::v-deep .type-tabs-item {
    width: 30%;
  }
  ::v-deep .interval-tabs-item {
    background: #f5f5f5;
    padding: 0 15% 0 15%;
    &.selected {
      color: $color-highlight;
      &:after {
        display: none;
      }
    }
  }

</style>