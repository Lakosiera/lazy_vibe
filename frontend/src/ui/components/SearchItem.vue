<script setup lang="ts">
import type { Idea } from '@/entity/idea';

interface Props {
    idea: Idea,
}

const { idea } = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="">
        <div class="row">
            <div class="col fw-bold h6 text-truncate _text-bg-tertiary text-body">{{ idea.name }}</div>
            <div class="col-auto">
                <span class="badge rounded-pill text-bg-success">{{ idea.time }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col lh-sm small text-body-secondary text-truncate">
                {{ idea.description }}
            </div>
        </div>
    </div>
</template>