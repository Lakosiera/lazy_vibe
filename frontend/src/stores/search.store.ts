import { defineStore } from 'pinia'
import { api } from '@/service/api.service'
import type { Idea } from '@/entity/idea'
import Fuse, { type FuseResult, type FuseResultMatch } from 'fuse.js'
import { useIdeaStore } from './idea.store'



const STORE_NAME = 'search'

interface State {
    query: string
    fuseResult: FuseResult<Idea>[]
}

const defaultState: State = {
    query: "",
    fuseResult: [],
}

export const useSearchStore = defineStore(STORE_NAME, {
    state: (): State => {
        return defaultState
    },
    getters: {
        searchQuery: (state) => state.query,
        searchIsQueryEmpty: (state) => state.query.length == 0,
        searchIsEmpty: (state) => state.fuseResult.length == 0,
        searchFuse: (state) => state.fuseResult,
    },
    actions: {
        async doSearch(text: string) {
            try {
                // this.result = await api.search(text) // TODO filter empty
                const fuse = new Fuse(useIdeaStore().all, {
                    keys: [
                        'name',
                        'description',
                        'instruction'
                    ],
                    includeMatches: true,
                })

                this.fuseResult = fuse.search(text)
                this.query = text
            } catch (error) {
                console.log(error)
            }
        },
    }
})