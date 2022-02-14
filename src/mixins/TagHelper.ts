import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) {
      return window.alert('标签名不能为空');
    } else if (name.length > 3) {
      return window.alert('标签名不能超过三个字');
    }
    this.$store.commit('createTag', name);
    window.alert('添加成功');
  }
}

export default TagHelper;