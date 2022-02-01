<template>
  <Layout class-prefix="layout">
    {{ record }}}
    <Types :value.sync="record.type"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <NumberPad @update:value="onUpdateAmount" @update:note="onUpdateNote"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';

  type Record = {
    tags: string[]
    note: string
    type: string
    amount: number
  }

  @Component({
    components: {Types, NumberPad, Tags}
  })
  export default class Money extends Vue {
    tags = ['餐饮', '购物', '居住', '交通', '娱乐', '医疗', '社交'];
    record: Record = {
      tags: [], note: '', type: '-', amount: 0
    };

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }
    // @update:value="onUpdateType"
    //   onUpdateType(value: string) {
    //     this.record.type = value;
    //   }
    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }
    onUpdateNote(value: string) {
      this.record.note = value;
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>