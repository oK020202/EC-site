<template>
  <div class="shop-item">
    <router-link :to="{ name: 'shopDetail', params: { id: id }}">
        <img :src="shop.image" width="300px">
        <h1 class="is-size-4">{{shop.name}}</h1>
    </router-link>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import shopDetail from './shopDetail.vue'
import { Repository } from '../../utils/repository.js';

export default Vue.extend({
  name: 'shopIndex',
  components:{
    shopDetail
  },
  props: ['shop', 'id']
})
</script>

<style scoped>
.shop-item {
  margin: 40px;
}
</style>