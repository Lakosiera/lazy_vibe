<script setup lang="ts">
import TextIcon from '../icons/IconText.vue'
import VibeHelp from '../components/VibeHelp.vue';
</script>

<template>
    <div class="lv-fill d-flex justify-content-center">
        <div class="align-self-center">
            <div class="container">
                <div class=" d-flex justify-content-center">
                    <VibeHelp title="Что вы хотите сделать?">
                        <div class="fx-text-gradient h2 lh-base font-comfortaa-700">
                            У вас есть <span class="fw-bold">гениальная</span> идея?
                            <br>Или вы ищети идею.
                            <br>Тогда мы вам поможем.
                        </div>
                    </VibeHelp>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col mb-1">
                        <div class="fx-glow-box">
                            <RouterLink class="btn btn-primary w-100 shadow"  to="/idea">
                                <TextIcon :show="true" class="fx-glow mx-auto" />
                            </RouterLink>
                        </div>
                    </div>
                    <div class="col mb-1">
                        <RouterLink class="btn btn-primary w-100 shadow"  to="/search">
                            <TextIcon :show="false" class="fx-glow mx-auto" />
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
