<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './ui/components/Navbar.vue'
import BackgroundBlur from './ui/components/BackgroundBlur.vue';
import { useIdeaStore } from './stores/idea.store';
import { onMounted } from 'vue';

const ideas = useIdeaStore()

onMounted(() => {
    ideas.doReadAll()
})
</script>

<template>
  <BackgroundBlur>
    <Navbar class="z-1"/>
    <RouterView />
  </BackgroundBlur>
</template>
