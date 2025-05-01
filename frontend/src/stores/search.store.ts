import { defineStore } from 'pinia'
import { api } from '@/service/api.service'
import type { Idea } from '@/entity/idea'

const STORE_NAME = 'search'

interface State {
    query: string,
    result: Idea[]
}

const defaultState: State = {
    query: "",
    result: []
}

export const useSearchStore = defineStore(STORE_NAME, {
    state: (): State => {
        return defaultState
    },
    getters: {
        searchQuery: (state) => state.query,
        searchResult: (state) => state.result,
        searchIsQueryEmpty: (state) => state.query.length == 0,
        searchIsEmpty: (state) => state.result.length == 0,
    },
    actions: {
        async doSearch(text: string) {
            try {
                this.result = await api.search(text)
                this.query = text
            } catch (error) {
                console.log(error)
            }
        },
    }
})