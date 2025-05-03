<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

watch(
    () => route.params.id,
    (newId, oldId) => {
        // react to route changes...
        console.log(newId)
    }
)
</script>

<template>
    <div class="container-fluid py-3">
        <div class="container">
            <div class="card shadow rounded-3">
                <div class="card-body p-2">
                    Идеи {{ $route.params.id }}
                </div>
            </div>
        </div>
    </div>
</template>