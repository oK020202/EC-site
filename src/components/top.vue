<template>
  <div>
    <topHeader/>
    <div class="top-main">
      <div class="top-logo"><img :src="require('../assets/revo-style-logo.jpg')" alt="logo" width="900px"></div>
      <div>
        <div class=" container-title">
          <h1 class="is-size-3">shop</h1>
        </div>
        <div class="shop-list columns is-2 is-multiline">
          <shop-index v-for="(shop, key) in shops" :key="key" :id="key" :shop="shop"></shop-index>
       </div>
      </div>
      
    </div>
    <topFooter/>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import shopIndex from "@/components/shopIndex.vue";
import shopDetail from './shopDetail.vue'
import topHeader from './topHeader.vue'
import topFooter from './topFooter.vue'
import { Repository } from '../../utils/repository.js';

export default {
  name: "top",
  components: {
    shopIndex,
    shopDetail,
    topHeader,
    topFooter
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
