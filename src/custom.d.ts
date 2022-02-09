type RecordItem = {
  tags: string[]
  note: string
  type: string
  amount: number  // 数据类型 object | string
  createdAt?: Date   // 类 / 构造函数
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

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
}
