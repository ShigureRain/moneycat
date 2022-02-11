<template>
  <Layout class-prefix="layout">
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <Tags/>
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
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Tabs from '@/components/Tabs.vue';
  import {Component} from 'vue-property-decorator';
  import recordTypeList from '@/constants/recordTypeList';

  @Component({
    components: {Tabs, Types, NumberPad, Tags, FormItem},
  })

  export default class Money extends Vue {
    recordTypeList = recordTypeList;
    record = {
      tags: [], note: '', type: '-', amount: 0
    };
    get recordList() {
      return this.$store.state.recordList;
    }
    created() {
      this.$store.commit('fetchRecords');
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }
    onUpdateNotes(value: string) {
      this.record.note = value;
    }
    saveRecord() {
      this.$store.commit('createRecord', this.record);
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>