<script setup lang="ts">
import { useIdeaStore } from '@/stores/idea.store';
import IconDownload from '../icons/IconDownload.vue';
import { goTo } from '@/router';
import IconPlus from '../icons/IconPlus.vue';
import IconFileExport from '../icons/IconFileExport.vue';

const ideas = useIdeaStore()
</script>

<template>
    <div class="container-fluid py-3">
        <div class="container">
            <div class="card shadow rounded-3">
                <ul class="list-group list-group-flush rounded-top-3">
                    <li v-for="idea in ideas.all" @click="goTo(idea.id)" class="list-group-item list-group-item-action"
                        role="button">
                        <div class="row">
                            <div class="col-3">{{ idea.name }}</div>
                            <div class="col text-truncate">{{ idea.description }}</div>
                            <div class="col-2">{{ idea.time }}</div>
                        </div>
                    </li>
                </ul>
                <div class="card-body p-2">
                    <button @click="ideas.saveAllJson('Все идеи')" type="button" class="btn btn-dark">
                        <IconDownload class="me-2 text-info" />
                        Скачать все JSON
                    </button>
                    <button @click="goTo()" type="button" class="btn btn-dark">
                        <IconPlus class="me-2 text-success-emphasis" />
                        Создать
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>