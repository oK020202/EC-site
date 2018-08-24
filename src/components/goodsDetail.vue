<template>
  <div class="goods">
    <topHeader/>
    <div class="goods-item" v-if="good">
        <div class="goods-image">
            <img :src="good.image" :alt="good.name" width="400px">
        </div>
        <div class="goods-info">
            <p class="is-size-5 goods-info-item">{{good.name}}</p>
            <p class="is-size-5 goods-info-item">¥ {{good.price}}</p>
            <p class="is-size-5 goods-info-item">{{good.information}}</p>
            <div class="button is-info goods-info-item"><a href="http://not-conventional.com" class="has-text-white">オンラインで購入</a></div>
        </div>
    </div>
    <div class="coordinate-container">
        <h1 class="is-size-4">おすすめコーディネート</h1>
        <coordinate/>
    </div>
    <div class="suggestion-container">
        <h1 class="is-size-4">その他のおすすめ商品</h1>
          <suggestion/>
    </div>
    <topFooter/>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import coordinate from './coordinate.vue';
import suggestion from './suggestion.vue';
import topHeader from './topHeader.vue'
import topFooter from './topFooter.vue'
import { Repository } from '../../utils/repository.js';

export default Vue.extend({
  components:{
    coordinate,
    suggestion,
    topHeader,
    topFooter,
  },
  data() {
    return {
      good: null,
      coordinate: null
  }
  },
  mounted() {
    const repository = new Repository()
    this.good = repository.getGood(this.$route.params.id)
    this.coordinate = repository.getCoordinate(this.$route.params.id)

  },
  watch: {
    '$route' (to, from) {
        const repository = new Repository()
        this.good = repository.getGood(to.params.id)
        this.coordinate = repository.getCoordinate(to.params.id)
    }
  }
});
</script>

<style scoped>
.goods {
  width: 100%;
}
.goods-item {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.goods-info-item {
  max-width: 400px;
  margin: 30px;
}

.goods-info p {
  margin: 20px;
}

.coordinate-container {
  margin: 300px 0;
}

.coordinate-container h1 {
  margin: 40px;
}
</style>