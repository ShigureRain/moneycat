<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input v-model="value"
             :placeholder="this.placeholder"
             type="text"
             @input="onValueChanged($event.target.value)">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    name = 'FormItem';
    value = '';
    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;

    @Watch('value')
    onValueChanged(value: string) {
      this.$emit('update:value', value);
    }
  }


</script>

<style lang="scss" scoped>
  .formItem {
    font-size: 16px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      min-width: 40px;
    }
    input {
      margin-left: 16px;
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
    }
  }

</style>