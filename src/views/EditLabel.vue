<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click.native="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name"
                field-name="标签名"
                placeholder="请输入标签名"
                @update:value="update"/>
    </div>
    <div class="deleteTag-wrapper">
      <Button class="deleteTag" @click.native="remove">
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
    tag?: { id: string, name: string } = undefined;
    created() {
      const id = this.$route.params.id;
      // route 用来获取路由信息
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      // filter 筛选
      if (tag) {
        this.tag = tag;
      } else {
        this.$router.replace('/404');
        // router 用来路由器转发
      }
    }
    update(name: string) {
      if (this.tag) {
        tagListModel.update(this.tag.id, name);
      }
    }
    remove() {
      if (this.tag) {
        tagListModel.remove(this.tag.id);
      }
    }
    goBack(){
      this.$router.back()
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
    background: #f6c84c;
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