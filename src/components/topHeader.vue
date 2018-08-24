<template>
  <div class="topHeader">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img :src="require('../assets/revo-style-icon.jpg')" alt="revo-style">
          </a>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/">
                ブランド
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="/#/shop/1">
                  Not conventional
                </a>
                <!-- <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a> -->
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/">
                  メンズ
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="/">
                    トップス
                  </a>
                  <a class="navbar-item" href="/">
                    アウター
                  </a>
                  <a class="navbar-item" href="/">
                    インナー
                  </a>
                  <a class="navbar-item" href="/">
                    アイテム
                  </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/">
                  レディース
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="/">
                    トップス
                  </a>
                  <a class="navbar-item" href="/">
                    アウター
                  </a>
                  <a class="navbar-item" href="/">
                    インナー
                  </a>
                  <a class="navbar-item" href="/">
                    アイテム
                  </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/">
                  キッズ
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="/">
                    トップス
                  </a>
                  <a class="navbar-item" href="/">
                    アウター
                  </a>
                  <a class="navbar-item" href="/">
                    インナー
                  </a>
                  <a class="navbar-item" href="/">
                    アイテム
                  </a>
                </div>
            </div>
          </div>
          <div class="navbar-end">
              <div class="navbar-item">
                <div class="field has-addons">
                  <div class="control">
                    <input class="input" type="text" placeholder="検索">
                  </div>
                  <div class="control">
                    <a class="button is-black">
                      Search
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </nav>

  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({})

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>

<style scoped>
</style>