<template>
  <div class="goods-item column is-one-quarter">
    <router-link :to="{ name: 'goodsDetail', params: { id: id }}">
        <img :src="good.image" width="100%">
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
.goods-item {
  margin: 30px 0;
}
.goods-item:hover {
  opacity: 0.7;
}

.goods-name {
  color: black;
}
</style>