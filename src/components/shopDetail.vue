<template>
  <div class="shop-container" v-if="shop">
    <img :src="shop.image" width="400px">
    <h1 class="is-size-3">{{shop.name}}</h1>
    <div class="goods-container">
        <h1 class="is-size-3">ショップで取り扱っている商品</h1>
        <div class="goods-list">
              <goods-index v-for="(good, key) in goods" :key="key" :id="key" :good="good"></goods-index>
        </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import goodsIndex from './goodsIndex.vue';
import { Repository } from '../../utils/repository.js';



export default Vue.extend({
  name:'shopDetail',
  components: {
    goodsIndex,
  },

  data() {
      return {
        shop: null,
        goods: []
      }
  },
  mounted() {
    const repository = new Repository()
    this.shop = repository.getShop(this.$route.params.id)
    this.goods = repository.getGoods()
  }
})
</script>

<style scoped>
.shop-container {
  margin: 100px auto;
}

.goods-container {
  margin: 100px auto;
}
.goods-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>