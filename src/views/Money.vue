<template>
  <Layout class-prefix="layout">
    {{ record }}
    <Types :value.sync="record.type"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <FormItem field-name="备注"
              placeholder="这里输入备注"
              @update:value="onUpdateNotes"/>
    <NumberPad @submit="saveRecord" @update:value="onUpdateAmount"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';
  import recordListModel from '@/models/recordListModel';
  import tagListModel from '@/models/tagListModel';
  import FormItem from '@/components/Money/FormItem.vue';

  // const recordListModel = require('@/recordListModel.js').default;

  // window.localStorage.setItem('version', '0.0.1');
  // const version = window.localStorage.getItem('version') || '0';
  // const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  const recordList = recordListModel.fetch();
  const tagList = tagListModel.fetch();

  // if (version === '0.0.1') {
  //   // 数据库升级，数据迁移
  //   recordList.forEach(record => {
  //     record.createdAt = new Date(2020, 0, 1);
  //   });
  //   window.localStorage.setItem('recordList', JSON.stringify(recordList));
  //   // 保存数据
  // }
  // window.localStorage.setItem('version', '0.0.2');

  // type RecordItem = {
  //   tags: string[]
  //   note: string
  //   type: string
  //   amount: number  // 数据类型 object | string
  //   createdAt?: Date   // 类 / 构造函数
  // }

  @Component({
    components: {Types, NumberPad, Tags, FormItem}
  })
  export default class Money extends Vue {
    tags = tagList;
    recordList = recordList;
    record = {
      tags: [], note: '', type: '-', amount: 0
    };

    onUpdateTags(value: []) {
      this.record.tags = value;
    }
    // @update:value="onUpdateType"
    //   onUpdateType(value: string) {
    //     this.record.type = value;
    //   }
    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }
    onUpdateNotes(value: string) {
      this.record.note = value;
    }
    saveRecord() {
      const record2 = recordListModel.clone(this.record);
      record2.createdAt = new Date();
      this.recordList.push(record2);
      // this.recordList.push(this.record);
    }
    //这里push的record地址，所以如果进行修改，之前的数据也会跟着改变，因为push进去的地址读取到的是新amount,现在这样会复制一份record

    @Watch('recordList')
    onRecordListChange() {
      recordListModel.save(this.recordList);
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>