<script setup lang="ts">
import { useTemplateRef } from 'vue'

const elm = useTemplateRef<HTMLDivElement>('lv-bg')

function onMouseMove(e: MouseEvent) {
    setPositionProperty(e.screenX - window.screenX , e.clientY  - window.screenY + window.screenTop)
}

function onMouseLeave(e: MouseEvent) {
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
    backdrop-filter: blur(10px); // размытие она
    mask-image: radial-gradient(
		circle var(--fx-blur-mask-size) at var(--mouse-x) var(--mouse-y),
		transparent calc(100% - var(--fx-blur-mask-feather-in)), // внутреннее размытие края
		black calc(100% + var(--fx-blur-mask-feather-out)), // внешнее размытие края
	);
	transition: backdrop-filter 0.3s ease;
}

.lv-background {
    background-image: url('@/assets/svg/grid.svg');
	opacity: 0.2; // прозрачность фона

    @supports (-moz-appearance:none) {
        // поддержка FIrefox
        background-image: url('@/assets/svg/grid_noanim.svg');
        opacity: 0.1;
    }
}

</style>