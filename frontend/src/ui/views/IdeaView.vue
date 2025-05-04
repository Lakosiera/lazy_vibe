<script setup lang="ts">
import router from '@/router';
import { useIdeaStore } from '@/stores/idea.store';
import { onMounted, ref, toRef, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute()
const ideas = useIdeaStore()

const id = ref(parseInt(route.params.id as string))

onMounted(() => {
    ideas.doRead(id.value)
    ideas.doReadAll()
})

onBeforeRouteUpdate(async (to, from) => {
    const pageId = parseInt(to.params.id as string)
    id.value = pageId

    if (pageId <= 0) {
        goTo(1)
    } else if (pageId > ideas.count) {
        goTo(ideas.count)
    }
})

watch(
    id,
    (newId, oldId) => {
        ideas.doRead(newId)
    }
)

function goTo(id: number) {
    router.push({ name: 'idea', params: { id: `${id}` } })
}

function onDelete() {
    ideas.doDelete(ideas.current.id)
}
function onUpdate() {
    ideas.doUpdate(ideas.current)
}
</script>

<template>
    <div class="container-fluid py-3">
        <div class="container">
            <div class="card shadow rounded-3">
                <div class="card-body p-2">

                </div>
                <div class="card-body p-2">

                    <div v-if="id" class="">
                        <form @submit.prevent="() => { }">
                            <div class="input-group mb-1">
                                <span class="input-group-text" id="basic-addon1"># {{ ideas.current.id }}</span>
                                <input v-model="ideas.current.name" type="text" class="form-control"
                                    placeholder="Название идеи">
                            </div>

                            <div class="input-group mb-1">
                                <input v-model="ideas.current.description" type="text" class="form-control"
                                    placeholder="Описание">
                            </div>

                            <div class="input-group mb-1">
                                <textarea v-model.trim="ideas.current.instruction" class="form-control" id="description"
                                    required placeholder="Инструкция" rows="10"></textarea>
                            </div>

                            <div class="input-group mb-2">
                                <input v-model="ideas.current.time" type="text" class="form-control"
                                    placeholder="Время">
                            </div>

                            <div class="d-grid gap-2 mt-1 d-md-flex _justify-content-md-end">
                                <button :disabled="id <= 1" @click="goTo(id - 1)" class="btn btn-dark">
                                    <span
                                        class="badge rounded-pill text-bg-primary">&nbsp;&nbsp;&laquo;&nbsp;&nbsp;</span>
                                </button>
                                <button :disabled="id >= ideas.count" @click="goTo(id + 1)" class="btn btn-dark">
                                    <span
                                        class="badge rounded-pill text-bg-primary">&nbsp;&nbsp;&raquo;&nbsp;&nbsp;</span>
                                </button>

                                <div class="flex-grow-1"></div>

                                <button type="submit" @click="onDelete" class="btn btn-dark">
                                    <span class="badge rounded-pill text-bg-danger">&nbsp;</span>&nbsp;
                                    <span role="status">Удалить</span>
                                </button>
                                <button type="submit" @click="onUpdate" class="btn btn-dark">
                                    <span class="badge rounded-pill text-bg-warning">&nbsp;</span>&nbsp;
                                    <span role="status">Сохранить</span>
                                </button>
                            </div>
                        </form>
                    </div>


                    <!-- <nav aria-label="">
                        <ul class="pagination pagination-sm">
                            <li class="page-item" :class="{ _disabled: id <= 1 }">
                                <RouterLink class="page-link" :to="{ name: 'idea', params: { id: id - 1 } }">
                                    
                                </RouterLink>
                            </li>
                            <li class="page-item" :class="{ _disabled: id >= ideas.count }">
                                <RouterLink class="page-link" :to="{ name: 'idea', params: { id: id + 1 } }">
                                    
                                </RouterLink>
                            </li>
                        </ul>
                    </nav> -->

                </div>
            </div>
        </div>
    </div>
</template>