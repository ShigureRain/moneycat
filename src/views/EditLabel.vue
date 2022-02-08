<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签名"
                placeholder="请输入标签名"/>
    </div>
    <div class="deleteTag-wrapper">
      <Button class="deleteTag">
        删除标签
      </Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {FormItem, Button}
  })
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id;
      // route 用来获取路由信息
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      // filter 筛选
      if (tag) {
        console.log(tag);
      } else {
        this.$router.replace('/404');
        // router 用来路由器转发
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .navBar {
    height: 64px;
    text-align: center;
    font-size: 20px;
    padding: 12px 16px;
    background: $color-highlight;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    > .leftIcon {
      width: 24px;
      height: 24px;
    }
    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }
  .form-wrapper {
    background-color: white;
    margin-top: 8px;
  }
  .deleteTag {
    background: red;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }
</style>