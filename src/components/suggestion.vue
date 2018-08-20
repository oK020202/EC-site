<template>
  <div class="suggestion columns is-2 is-multiline">
    <div class="suggest-ite column is-one-quarter" v-for="(good, key) in goods" :key="key">
        <router-link :to="{ name: 'goodsDetail', params: { id: key }}">
          <img :src="good.image" width="100%" v-if="good">
        </router-link>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import { Repository } from '../../utils/repository.js';

export default Vue.extend({
  name:'suggestion',
  data() {
      return {
        goods: []
    }
  },
  mounted() {
    const repository = new Repository()
    this.goods = repository.getGoods()
  }
  })
</script>

<style scoped>
.suggest-item {
  margin: 10px;
}
</style>