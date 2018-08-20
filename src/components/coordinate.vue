<template>
  <div class="coordinates">
    <div class="coordinate-image columns is-2 is-multiline" v-if="coordinate">
      <div class="coordinate column is-one-quarter" v-for="(img, key) in coordinate.images" :key="key">
          <img :src="img" width="100%">
      </div>
    </div>
    <div class="coordinate-information" v-if="good">
      <p>{{good.information}}</p>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import { Repository } from '../../utils/repository.js';

export default Vue.extend({
  name: 'coordinate',
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
})
</script>

<style scoped>
.coordinate-information {
  margin: 50px auto;
  width: 100%;
}
.coordinate {
  margin: 30px 0;
}
</style>