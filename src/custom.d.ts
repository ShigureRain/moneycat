type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

type RecordItem = {
  tags: Tag[]
  note: string
  type: string
  amount: number  // 数据类型 object | string
  createdAt?: string   // 类 / 构造函数
}

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' //success 表示成功， duplicated 表示 name 重复 , 联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  sava: () => void
  // 提前声明类型
}

// interface Window {
//   // store: {
//   //   tagList: Tag[];
//   //   createTag: (name: string) => void;
//   //   findTag: (id: string) => Tag | undefined;
//   //   removeTag: (id: string) => boolean;
//   //   // updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
//   //   updateTag: TagListModel['update'];
//   //   recordList: RecordItem[];
//   //   createRecord: (record: RecordItem) => void;
//   // };
// }
