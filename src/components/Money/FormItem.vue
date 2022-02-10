<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input :placeholder="placeholder"
             :value="value"
             type="text"
             @input="onValueChanged($event.target.value)">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    name = 'FormItem';
    @Prop({default: ''}) readonly value!: string;
    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;

    onValueChanged(value: string) {
      this.$emit('update:value', value);
    }
  }

</script>

<style lang="scss" scoped>
  .formItem {
    background: white;
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