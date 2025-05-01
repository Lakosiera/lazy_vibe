import { defineStore } from 'pinia'
import { api } from '@/service/api.service'
import type { Idea } from '@/entity/idea'

const STORE_NAME = 'think'

interface State {
    idea: Idea,
    inProcesse: boolean,
}

const defaultState: State = {
    idea: {
        name: "TODO",
        description: "TODO"
    },
    inProcesse: false,
}

export const useThinkStore = defineStore(STORE_NAME, {
    state: (): State => {
        return defaultState
    },
    getters: {
        ideaReadyToThink: (state) => (state.idea.name.length > 0 && state.idea.description.length > 0),
        ideaEmpty: (state) => (state.idea.instruction?.length || 0) == 0,
    },
    actions: {
        async doThinking(idea: Idea) {
            try {
                console.log("doThinking")
                this.inProcesse = true
                this.idea = await api.think(idea)
                // this.think.inProcesse = false
            } catch (error) {
                console.log(error)
            }
        },
    }
})