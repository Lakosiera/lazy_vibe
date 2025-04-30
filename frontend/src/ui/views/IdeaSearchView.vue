<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { debounce } from "@/utils/input";
import IconSearch from "@/ui/icons/IconSearch.vue";
import { useApiStore } from '@/stores/api.store';

const isInput = ref(false)
const isSearching = ref(false)

const api = useApiStore()

let searchDebounce = debounce((value: string) => {
    api.doSearch(value)
        .then((data: any) => {
            isSearching.value = false
        })
        .catch((error) => {
            isSearching.value = false
        })
}, 200)

function searchInput(event: Event) {
    const el = event.target as HTMLInputElement
    if (el.value.trim() != "") {
        isInput.value = true
        isSearching.value = true
        searchDebounce(el.value || "")
    } else {
        isInput.value = false
    }
}
</script>

<template>
    <div class="container-fluid py-3">
        <div class="container">
            <div class="card shadow rounded-3">
                <div class="card-body p-2">
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">
                            <div v-if="isSearching" class="spinner-grow spinner-grow-sm text-primary-emphasis"
                                role="status">
                                <span class="visually-hidden"></span>
                            </div>
                            <div v-if="!isSearching" class="">
                                <IconSearch class="text-primary-emphasis" />
                            </div>
                        </span>
                        <input @input="searchInput" type="text" class="form-control" placeholder="Подайте мне идею!"
                            aria-label="Username" aria-describedby="addon-wrapping">
                    </div>
                </div>
            </div>
        </div>

        <div class="container text-center mt-5">
            <div v-if="!isInput" class="">
                В голове пусто
            </div>
        </div>

        <div v-if="isInput" class=" container mt-5 lh-lg text-start">
            <div class="row">
                <div class="col-3">Идея</div>
                <div class="col">Описание</div>
                <div class="col-2">Сроки</div>
            </div>
            
            <div v-for="res in api.search" class="row">
                <div class="col-3">{{ res.name }}</div>
                <div class="col text-truncate">{{ res.description }}</div>
                <div class="col-2">{{ res.tome }}</div>
            </div>
        </div>
    </div>
</template>