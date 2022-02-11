<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type"/>
    <Tabs :data-source="intervalLIst" :value.sync="interval" class-prefix="interval"/>
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record"
          >
            <span>{{ item.tags }}</span>
            <span class="notes">{{ item.note }}</span>
            <span>￥{{ item.amount }} </span>
          </li>
        </ol>
      </li>
    </ol>
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
    get recordList() {
      return (this.$store.state as RootState).recordList;
    }
    get result() {
      const {recordList} = this;
      type HashTableItem = { title: string, items: recordList[] }

      const hashTable: { [key: string]: HashTableItem } = {};  //声明空对象的类型
      for (let i = 0; i < this.recordList.length; i++) {
        const [date, time] = recordList[i].createdAt!.split('T');  //按 T 分割
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);
      }
      return hashTable;
    }
    tagString(tags: Tag[]) {
      return tags.length === 0 ? '无' : tags.join(',');
    }
    beforeCreate() {
      this.$store.commit('fetchRecords');
    }
  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  ::v-deep {
    .interval-tabs-item {
      background: white;
      position: absolute;
      width: 100% !important;
      height: 100%;
      &.selected {
        background: $color-highlight;
        &:after {
          display: none;
        }
      }
    }
    .interval-tabs {
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
  }
  %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .title {
    @extend %item;
  }
  .record {
    background: white;
    @extend %item;
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }

</style>