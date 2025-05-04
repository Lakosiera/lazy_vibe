<script setup lang="ts">
import router from '@/router';
import { useIdeaStore } from '@/stores/idea.store';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const ideas = useIdeaStore()

onMounted(() => {
    ideas.doReadAll()
})

function goTo(id?: number) {
    router.push({ name: 'idea', params: { id: `${id}` } })
}
</script>

<template>
    <div class="container-fluid py-3">
        <div class="container">
            <div class="card shadow _rounded-2">
                <ul class="list-group list-group-flush">
                    <li v-for="idea in ideas.all" @click="goTo(idea.id)" class="list-group-item list-group-item-action">
                        <div class="row">
                            <div class="col-3">{{ idea.name }}</div>
                            <div class="col text-truncate">{{ idea.description }}</div>
                            <div class="col-2">{{ idea.time }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>