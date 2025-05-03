<script setup lang="ts">
import LogoIcon from '../icons/IconLogo.vue'
</script>

<template>
    <nav class="lv-nav-bg navbar navbar-expand-lg z-3">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">
                <LogoIcon class="fx-glow i-32" />
                <span class="ms-3 font-anta">Lazy Vibe</span>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link " activeClass="active" to="/think">
                            Есть идея!
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link " activeClass="active" to="/search">
                            Найти идею
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" activeClass="active" to="/about" >
                            О проекте
                        </RouterLink>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link" activeClass="active" to="/admin" >
                            Админка
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
@import "bootstrap/scss/bootstrap.scss";

.lv-nav-bg {
    // @extend .bg-dark;
    backdrop-filter: blur(10px);
}

.i-32 {
    width: var(--lv-logo-size);
    height: var(--lv-logo-size);
}
</style>