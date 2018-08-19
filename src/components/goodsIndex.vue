<template>
  <div class="goods-item">
    <router-link :to="{ name: 'goodsDetail', params: { id: id }}">
        <img :src="good.image" width="300px">
        <h1 class="goods-name is-size-4">{{good.name}}</h1>
    </router-link>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import goodsDetail from './goodsDetail.vue'
import { Repository } from '../../utils/repository.js';

export default Vue.extend({
  name: 'goodsIndex',
  components:{
    goodsDetail
  },
  props: ['good', 'id']
})
</script>

<style scoped>
.goods-item:hover {
  opacity: 0.7;
}
.goods-item {
  margin: 30px;
}
.goods-name {
  color: black;
}
</style>