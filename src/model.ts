const localStorageKeyName = 'recordList';
const model = {
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data))
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]') as RecordItem[];  //as断言类型 , 后面使用就可以不再声明
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem('localStorageKeyName', JSON.stringify(data));

  }
};
// 封装 model

export default model;