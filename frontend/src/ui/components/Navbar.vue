<script setup lang="ts">
import LogoIcon from '../icons/IconLogo.vue'
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">
                <LogoIcon class="logo i-32" />
                <span class="ms-3 font-anta">Lazy Vibe</span>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <!-- <li class="nav-item">
                        <RouterLink class="nav-link " activeClass="active" to="/">
                            Домой
                        </RouterLink>
                    </li> -->
                    <li class="nav-item">
                        <RouterLink class="nav-link" activeClass="active" to="/about" >
                            О проекте
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>