<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type"/>
    <Tabs :data-source="intervalLIst" :value.sync="interval" class-prefix="interval"/>
    <div>
      type:{{ type }}
      <br/>
      interval:{{ interval }}
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';

  @Component({
    components: {Tabs},
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    intervalLIst = intervalList;
    recordTypeList = recordTypeList;
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  ::v-deep .type-tabs-item {
    width: 30%;
  }
  ::v-deep .interval-tabs-item {
    background: white;
    position: absolute;
    width: 100%;
    height: 100%;
    &.selected {
      background: $color-highlight;
      &:after {
        display: none;
      }
    }
  }
  ::v-deep .interval-tabs {
    width: 80%;
    border: 1px solid $color-highlight;
    background: #f5f5f5;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
    margin: 20px 0 20px 0;
    height: 40px;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
  }

</style>