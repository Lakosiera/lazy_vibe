<script setup lang="ts">
import IconSearch from "@/ui/icons/IconSearch.vue";
import { ref, type Ref } from 'vue';
import { debounce } from "@/utils/input";
import { useSearchStore } from '@/stores/api.store';

const search = useSearchStore()

const isSearching: Ref<boolean> = ref(false)

const searchDebounce = debounce((value: string) => {
    search.doSearch(value)
        .finally(() => {
            isSearching.value = false
        })
}, 200)

function searchInput(event: Event) {
    const el = event.target as HTMLInputElement
    if (el.value.trim() != "") {
        isSearching.value = true
        searchDebounce(el.value || "")
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
                        <input @input="searchInput" v-model="search.query" 
                            type="text" class="form-control"
                            placeholder="Подайте мне идею!" aria-label="Username" aria-describedby="addon-wrapping">
                    </div>
                </div>
            </div>
        </div>

        <div class="container text-center mt-5">
            <div v-if="search.searchIsQueryEmpty || search.searchIsEmpty" class="">
                В голове пусто
            </div>
        </div>

        <div v-if="!search.searchIsQueryEmpty && !search.searchIsEmpty" class=" container mt-5 lh-lg text-start">
            <div class="row text-center">
                <div class="col-3">Идея</div>
                <div class="col">Описание</div>
                <div class="col-2">Сроки</div>
            </div>

            <div v-for="res in search.searchResult" class="row">
                <div class="col-3">{{ res.name }}</div>
                <div class="col text-truncate">{{ res.description }}</div>
                <div class="col-2">{{ res.time }}</div>
            </div>
        </div>
    </div>
</template>