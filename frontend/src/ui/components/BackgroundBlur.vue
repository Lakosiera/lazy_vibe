<script setup lang="ts">
import { useTemplateRef } from 'vue'

const elm = useTemplateRef<HTMLDivElement>('lv-bg')

function onMouseMove(e: MouseEvent) {
    setPositionProperty(e.screenX, e.clientY + window.scrollY)
}

function onMouseLeave(e: MouseEvent) {
    console.log(e.screenX)
    setPositionProperty()
}

function setPositionProperty(x:number = -9999, y:number = -9999) {
    elm.value?.style.setProperty("--mouse-x", `${x}px`);
    elm.value?.style.setProperty("--mouse-y", `${y}px`);
}
</script>

<template>
    <div class="lv-fill z-n1 lv-background"></div>
    <div class="lv-fill z-n1 lv-blurred-overlay" ref="lv-bg"></div>
    <div class="lv-fill z-n1" v-on:mousemove="onMouseMove" v-on:mouseleave="onMouseLeave">
        <slot></slot> <!-- slot outlet -->
    </div>
</template>

<style lang="scss" scoped>

.lv-blurred-overlay {
    backdrop-filter: blur(10px);
    mask-image: radial-gradient(
		circle var(--fx-blur-mask-size) at var(--mouse-x) var(--mouse-y),
		transparent calc(100% - var(--fx-blur-mask-feather-in)), // внутреннее размытие края
		black calc(100% + var(--fx-blur-mask-feather-out)), // внешнее размытие края
	);
	// transition: backdrop-filter 0.3s ease;
}

.lv-background {
    background-image: url('@/assets/svg/grid.svg');
	opacity: 0.5;
}
</style>