<script setup lang="ts">
import type { Idea } from '@/entity/idea';
import { type FuseResult, type FuseResultMatch } from 'fuse.js';
import { onMounted, ref } from 'vue';
import HighlightText from './HighlightText.vue';

interface Props {
    fuse: FuseResult<Idea>,
}

const { fuse } = defineProps<Props>()

const name = ref(fuse.item.name)
const description = ref(fuse.item.description)
const instruction = ref(fuse.item.instruction || "")

const mName = ref(fuse.matches?.find((x) => x.key == "name") || null)
const mDescription = ref(fuse.matches?.find((x) => x.key == "description") || null)
const mInstruction = ref(fuse.matches?.find((x) => x.key == "instruction") || null)

</script>

<template>
    <div class="">
        <div class="row">
            <div class="col fw-bold h6 text-truncate _text-bg-tertiary text-body">
                <HighlightText :text="name" :matches="mName" css="text-primary-emphasis fw-bolder _text-decoration-underline"/>
            </div>
            <div class="col-auto">
                <span class="badge rounded-pill text-bg-success">{{ fuse.item.time }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col lh-sm small text-body-secondary text-truncate">
                <HighlightText :text="description" :matches="mDescription" css="text-primary-emphasis"/>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col lh-sm small text-body-secondary text-truncate">
                <HighlightText :text="instruction" :matches="mInstruction" :compact="true" css="text-primary-emphasis"/>
            </div>
        </div> -->
    </div>
</template>