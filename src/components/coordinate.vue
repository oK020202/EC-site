<template>
  <div class="coordinates">
    <div class="coordinate-image columns is-2 is-multiline" v-if="coordinate">
      <div class="coordinate column is-one-quarter" v-for="(img, key) in coordinate.images" :key="key">
          <img :src="img" width="100%">
      </div>
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
        coordinate: null
      }
  },
  mounted() {
    const repository = new Repository()
    this.coordinate = repository.getCoordinate(this.$route.params.id)
  },
    watch: {
    '$route' (to, from) {
        const repository = new Repository()
        this.coordinate = repository.getCoordinate(to.params.id)
    }
  }
})
</script>

<style scoped>
.coordinate-information {
  margin: 50px auto;
  width: 50%;
}
.coordinate {
  margin: 30px 0;
}
</style>