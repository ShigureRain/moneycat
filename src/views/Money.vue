<template>
  <Layout class-prefix="layout">
    <Types/>
    <Tags :data-source="tags"/>
    <NumberPad/>
  </Layout>
</template>

<script>
  import NumberPad from '@/components/Money/NumberPad.vue'
  import Types from '@/components/Money/Types.vue'
  import Tags from '@/components/Money/Tags.vue'

  export default {
    name: 'Money',
    components: {Types, NumberPad, Tags},
    data() {
      return {
        tags: ['餐饮', '购物', '居住', '交通', '娱乐', '医疗', '社交']
      }
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>