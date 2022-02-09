const localStorageKeyName = 'recordList';
const recordListModel = {
  data:[] as RecordItem[],
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    this.data =JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];  //as断言类型 , 后面使用就可以不再声明
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));

  }
};
// 封装 recordListModel

export default recordListModel;