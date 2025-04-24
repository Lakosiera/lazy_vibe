<script setup lang="ts">
import LazeVibeIcon from '../icons/IconLazeVibe.vue'

interface Props {
    title?: string,
}

const { title } = withDefaults(defineProps<Props>(), {
    title: "",
})
</script>
<template>
    <div class="d-flex">
        <LazeVibeIcon class="fx-glow-sm align-self-end d-sm-block d-none" />
        <div class="flex-fill pb-4">
            <div class="d-flex flex-row align-self-start">
                <div class="z-2 tri-bottom align-self-end d-sm-block d-none"></div>
                <div class="z-1 card shadow border-0 rounded-4 bg-body-tertiary flex-fill">
                    <div class="card-body">
                        <h5 v-if="title" class="card-title text-center">{{ title }}</h5>
                        <p class="card-text lh-lg">
                            <slot></slot> <!-- slot outlet -->
                        </p>
                    </div>
                </div>
            </div>
            <div class=""><br><br><br></div>
        </div>
    </div>
</template>