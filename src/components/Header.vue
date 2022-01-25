<template>
  <!-- Header -->
  <header id="header" class="header__base">
    <div class="header__container">
      <!-- App Name -->
      <a class="header__brand" href="#">Music</a>
      <nav class="nav__base">
        <!-- Primary Navigation -->
        <ul class="nav__menu">
          <!-- Navigation Links -->
          <li>
            <a class="nav__link" href="#" @click.prevent="toggleAuthModal">Login / Register</a>
          </li>
          <li>
            <a class="nav__link" href="#">Manage</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';

  export default {
    name: 'Header',
    methods: {
      ...mapMutations(['toggleAuthModal']),
      // toggleAuthModal() {
      //   this.$store.commit('toggleAuthModal');
      //   console.log(this.$store.state.authModalShow);
      // },
    },
  };
</script>