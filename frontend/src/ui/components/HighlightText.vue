<script setup lang="ts">

import { type FuseResultMatch } from 'fuse.js'
import { onMounted, ref } from 'vue';

interface Props {
    text?: string
    matches?: FuseResultMatch | null
    css?: string
}

// "text-primary-emphasis"
const { text, matches, css } = defineProps<Props>()

const rawHtml = ref("")

const cssDefault = "text-primary-emphasis"
onMounted(() => {
    rawHtml.value = highlight(css || cssDefault) 
})

function highlight(css: string): string {
    if (matches == null) return text || ""

    let result = ""
    let index = 0
    let source = matches.value || ""

    matches.indices.forEach(([startIndex, endIndex]) => {
        result += [
            source.substring(index, startIndex),
            `<b class="${css}">`,
            source.substring(startIndex, endIndex+1),
            `</b>`,
        ].join('')

        index = endIndex+1
    })

    result += source.substring(index)
    return result
}

</script>

<template>
    <span v-html="rawHtml"></span>
</template>