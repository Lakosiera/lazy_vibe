<script setup lang="ts">
import TextIcon from '../icons/IconText.vue'
import VibeHelp from '../components/VibeHelp.vue';
</script>

<template>
    <div class="container-fluid py-3">
        <div class="container">
            <VibeHelp />
        </div>
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col mb-1">
                    <a href="#" class="btn btn-primary w-100 shadow">
                        <TextIcon :show="true" class="logo mx-auto" />
                    </a>
                </div>
                <div class="col mb-1">
                    <a href="#" class="btn btn-primary w-100 р-100 shadow">
                        <TextIcon :show="false" class="logo mx-auto" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
