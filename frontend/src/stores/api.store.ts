import { defineStore } from 'pinia'
import { api } from '@/service/api.service'
import type { Search } from '@/entity/idea'

const STORE_NAME = 'api'

interface State {
    search: Search[]
}

export const useApiStore = defineStore(STORE_NAME, {
    state: (): State => {
        return {
            search: []
        }
    },
    getters: {
        searchLen: (state) => state.search.length
    },
    actions: {
        async doSearch(text: string) {
            try {
                let res = await api.search(text)
                this.search = res
            } catch (error) {
                // console.log(error)
                console.log(`!> ${error}`)
            }
        }
    }
})