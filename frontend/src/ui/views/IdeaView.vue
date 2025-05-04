<script setup lang="ts">
import { goTo } from '@/router';
import { useIdeaStore } from '@/stores/idea.store';
import { onMounted, ref, toRef, watch, type Ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import IconDownload from '../icons/IconDownload.vue';
import IconFilePdf from '../icons/IconFilePdf.vue';
import IconFile from '../icons/IconFile.vue';
import IconFileImport from '../icons/IconFileImport.vue';
import IconTrash from '../icons/IconTrash.vue';

const route = useRoute()
const ideas = useIdeaStore()

const idString = ref(route.params.id as string)
const id = ref<number | null>(null)

onMounted(() => {
    id.value = parseId(idString.value)
    if (id.value == null) {
        ideas.current = {}
    } else {
        ideas.doRead(id.value)
    }
})

onBeforeRouteUpdate(async (to, from) => {
    id.value = parseId(to.params.id as string)
    if (id.value == null) return
    if (id.value <= 0) {
        goTo(1)
    } else if (id.value > ideas.count) {
        goTo(ideas.count)
    }
})

watch(
    id,
    (newId, oldId) => {
        if (newId != null) {
            ideas.doRead(newId)
        }
    }
)

function parseId(value: string): number | null {
    if (value == "") {
        return null
    } else {
        let parsedNUmber = parseInt(value)
        if (!isNaN(parsedNUmber)) {
            return parsedNUmber
        } else {
            return null
        }
    }
}

function onDelete() {
    ideas.doDelete(ideas.current.id)
}

function onCreateOrUpdate() {
    ideas.onCreateOrUpdate(ideas.current)
}
</script>

<template>
    <div class="container-fluid py-3">
        <div class="container">
            <div class="card shadow rounded-3">
                <div v-if="id" class="card-body px-2 pt-1 pb-0">
                    <div class="d-grid gap-2 mt-1 d-md-flex">
                        <button :disabled="id <= 1" @click="goTo(id - 1)" class="btn btn-sm btn-dark">
                            <span class="badge rounded-pill text-bg-primary">&nbsp;&nbsp;&laquo;&nbsp;&nbsp;</span>
                        </button>
                        <button :disabled="id >= ideas.count" @click="goTo(id + 1)" class="btn  btn-sm btn-dark">
                            <span class="badge rounded-pill text-bg-primary">&nbsp;&nbsp;&raquo;&nbsp;&nbsp;</span>
                        </button>
                    </div>
                </div>

                <div class="card-body p-2">
                    <div class="">
                        <form @submit.prevent="() => { }">
                            <div class="input-group mb-1">
                                <span class="input-group-text" id="basic-addon1"># {{ ideas.current.id }}</span>
                                <input v-model="ideas.current.name" type="text" class="form-control" required
                                    placeholder="Название идеи">
                            </div>

                            <div class="input-group mb-1">
                                <input v-model="ideas.current.description" type="text" class="form-control" required
                                    placeholder="Описание">
                            </div>

                            <div class="input-group mb-1">
                                <textarea v-model.trim="ideas.current.instruction" class="form-control" id="description"
                                    required placeholder="Инструкция" rows="10"></textarea>
                            </div>

                            <div class="input-group mb-2">
                                <input v-model="ideas.current.time" type="text" class="form-control" required
                                    placeholder="Время">
                            </div>

                            <div class="d-grid gap-2 mt-1 d-md-flex">
                                <div class="btn-group-vertical" role="group" aria-label="">
                                    <div class="btn-group" role="group">
                                        <button :class="{disabled : ideas.isEmpty(ideas.current)}" type="button" class="btn btn-dark dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <IconDownload class="me-2 text-info" />
                                            Скачать
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <div @click="ideas.savePdf" class="dropdown-item" role="button">
                                                    <IconFilePdf class="me-2 text-info" />
                                                    PDF
                                                </div>
                                            </li>
                                            <li>
                                                <div @click="ideas.saveJson" class="dropdown-item" role="button">
                                                    <IconFile class="me-2 text-info" />
                                                    JSON
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="flex-grow-1"></div>

                                <div class="btn-group" role="group">
                                    <button :class="{disabled : ideas.isEmpty(ideas.current)}" @click="onCreateOrUpdate" class="btn btn-dark">
                                        <IconFileImport class="me-2 text-success"/>
                                        <span role="status">Сохранить</span>
                                    </button>

                                    <div :class="{disabled : ideas.isEmpty(ideas.current)}" class="btn-group" role="group">
                                        <button @click="onCreateOrUpdate" type="button" class="btn btn-dark dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li @click="onDelete" :class="{disabled: !ideas.currentIdValid}" class="dropdown-item" role="button"> 
                                                <IconTrash class="me-2 text-danger" />
                                                <span role="status">Удалить</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>