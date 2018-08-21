<template>
  <div>
    <div class="top-main">
      <div class="top-logo"><img src="../assets/top-logo.jpg" alt="logo" width="70%"></div>
      <div class="information">
        <p>revostyleは洋服のタグを通してコーディネートなどの提案をしていきます。</p>
      </div>
      <div>
        <div class="container-title">
          <h1 class="is-size-3">shop</h1>
        </div>
        <div class="shop-list columns is-2 is-multiline">
          <shop-index v-for="(shop, key) in shops" :key="key" :id="key" :shop="shop"></shop-index>
       </div>
      </div>
      
    </div>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import shopIndex from "@/components/shopIndex.vue";
import shopDetail from './shopDetail.vue'
import { Repository } from '../../utils/repository.js';

export default {
  name: "top",
  components: {
    shopIndex,
    shopDetail
  },
  data() {
      return {
        shops: []
      }
  },
  mounted() {
    this.shops = new Repository().getShops()
  }
};
</script>

<style scoped>
.information {
  height: 200px;
  margin: auto;
}

.information p {
  width: 80%;
  margin: auto;
}

/* .shop-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
} */
</style>
