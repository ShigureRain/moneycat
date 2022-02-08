<template>
  <Layout>
    <div class="title">喵 记 簿</div>
    <div class="tags">
      <router-link v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`" class="tag">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click.native="createTag">
        新建标签
      </Button>
    </div>
  </Layout>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import Button from '@/components/Button.vue';

  tagListModel.fetch();

  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    tags = tagListModel.data;

    createTag() {
      const name = window.prompt('请输入标签名');
      if (name) {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
          window.alert('标签名重复了');
        } else if (message === 'success') {
          window.alert('添加成功');
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .title {
    height: 64px;
    text-align: center;
    font-size: 24px;
    background: $color-highlight;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
  }
  .tags {
    background: white;
    font-size: 16px;
    padding-left: 20px;
    > .tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      color: $color-highlight;
      svg {
        margin-right: 16px;
      }
    }
  }
  .createTag {
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }
</style>