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