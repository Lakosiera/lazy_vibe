<script setup lang="ts">
import IconSearch from "@/ui/icons/IconSearch.vue";
import { ref, type Ref } from 'vue';
import { debounce } from "@/utils/input";
import { useSearchStore } from '@/stores/search.store';
import SearchItem from "../components/SearchItem.vue";
import { goTo } from "@/router";

const search = useSearchStore()

const isSearching: Ref<boolean> = ref(false)

const searchDebounce = debounce((value: string) => {
    search.doSearch(value)
        .finally(() => {
            isSearching.value = false
        })
}, 300)

function searchInput(event: Event) {
    const el = event.target as HTMLInputElement
    if (el.value.trim() != "") {
        isSearching.value = true
        search.result = []
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
          
                <ul v-if="!search.searchIsQueryEmpty && !search.searchIsEmpty" class="list-group list-group-flush rounded-bottom-3">
                    <li  v-for="idea in search.searchResult"  @click="goTo(idea.id)"
                        class="list-group-item list-group-item-action" role="button">
                        <SearchItem :idea="idea"/>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container text-center mt-5">
            <div v-if="search.searchIsQueryEmpty || search.searchIsEmpty" class="">
                В голове пусто
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.lv-hover:hover {
    background-color: var(--bs-list-group-action-hover-bg) !important;
}
</style>