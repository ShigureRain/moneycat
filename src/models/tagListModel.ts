const localStorageKeyName = 'tagList';
type TagListModel = {
  data: string[]
  fetch: () => string[]
  create: (name: string) => 'success' | 'duplicated' //success 表示成功， duplicated 表示 name 重复 , 联合类型
  sava: () => void
  // 提前声明类型
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]');
    return this.data;
  },
  create(name: string) {
    if (this.data.indexOf(name) >= 0) {
     return 'duplicated';
    }
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem('localStorageKeyName', JSON.stringify(this.data));
  }
};

export default tagListModel;