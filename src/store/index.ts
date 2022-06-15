import { defineStore } from 'pinia'

type State={
    counter: number,
    name: string,
    isAdmin: boolean
}

const useStore = defineStore('storeId', {
  // 推荐使用 完整类型推断的箭头函数
  state: ():State => ({
    counter: 0,
    name: 'Eduardo',
    isAdmin: true,
  }),
  actions:{
    setName(name: string) {
        this.name = name
      },
  }
})

export{
    useStore
}