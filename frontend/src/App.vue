<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './ui/components/Navbar.vue'
</script>

<template>
  <div class="lv-fill">
    <Navbar class="z-1"/>
    <RouterView />
  </div>
</template>
