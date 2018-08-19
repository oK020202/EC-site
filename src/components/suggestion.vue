<template>
  <div class="suggestion">
    <div class="suggest-item" v-for="(good, key) in goods" :key="key">
        <router-link :to="{ name: 'goodsDetail', params: { id: key }}">
          <img :src="good.image" width="300px" v-if="good">
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
.suggestion {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.suggest-item {
  margin: 50px;
}
</style>