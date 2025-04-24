<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './ui/components/Navbar.vue'
import BackgroundBlur from './ui/components/BackgroundBlur.vue';

</script>

<template>
  <BackgroundBlur>
    <Navbar class="z-1"/>
    <RouterView />
  </BackgroundBlur>
</template>
