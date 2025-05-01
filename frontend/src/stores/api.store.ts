import { defineStore } from 'pinia'
import { api } from '@/service/api.service'
import type { Idea } from '@/entity/idea'

const STORE_NAME = 'api'

interface State {
    search: {
        query: string,
        result: Idea[]
    }
}

export const useApiStore = defineStore(STORE_NAME, {
    state: (): State => {
        return {
            search: {
                query: "",
                result: []
            }
        }
    },
    getters: {
        searchQuery: (state) => state.search.query,
        searchResult: (state) => state.search.result,
        searchIsQueryEmpty: (state) => state.search.query.length == 0,
        searchIsEmpty: (state) => state.search.result.length == 0,
    },
    actions: {
        async doSearch(text: string) {
            try {
                let res = await api.search(text)
                this.search.result = res
                this.search.query = text
            } catch (error) {
                // console.log(error)
                console.log(`!> ${error}`)
            }
        }
    }
})