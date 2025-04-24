<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LogoIcon from './ui/icons/IconLogo.vue'
</script>

<template>
  <LogoIcon class="logo"/>

  <div class="container-fluid py-3">
    <!-- <div class="card _text-bg-light shadow-lg" style="width: 18rem;"> -->
      <img alt="Vue logo" class="logo card-img-top" src="@/assets/lazyvibe.svg" width="256" height="256" />
      <!-- <div class="card-body">
      </div>
    </div> -->
  </div>

  <div class="neon"></div>

  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <!-- <RouterView /> -->
</template>

<style scoped>
</style>
