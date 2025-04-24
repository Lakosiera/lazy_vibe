<script setup lang="ts">
import LazeVibeIcon from '../icons/IconLazeVibe.vue'
import VibeHelp from '../components/VibeHelp.vue';
</script>

<template>
    <div class="container-fluid py-3">
        <div class=" d-flex justify-content-center">
            <VibeHelp title="О проекте?">
                Проект по генарции <span class="fw-bold">гениальных</span> идей :)
                <br><br>
                <div class="row">
                    <div class="col">Исходный код</div>
                    <div class="col"><a href="https://github.com/Lakosiera/lazy_vibe">github.com</a></div>
                </div>
                <div class="row">
                    <div class="col">Автор</div>
                    <div class="col">Саразеева Алёна</div>
                </div>
            </VibeHelp>
        </div>

        <div class="container position-relative">
            <div class="fx-neon position-absolute top-0"></div>
        </div>
    </div>
</template>