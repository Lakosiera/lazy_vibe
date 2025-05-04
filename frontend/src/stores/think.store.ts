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
        // name: "TODO убрать",
        // description: "TODO убрать"
    },
    inProcesse: false,
}

export const useThinkStore = defineStore(STORE_NAME, {
    state: (): State => {
        return defaultState
    },
    getters: {
        ideaReadyToThink: (state) => (state.idea.name != null && state.idea.description != null && state.idea.name.length > 0 && state.idea.description.length > 0),
        ideaEmpty: (state) => (state.idea.instruction?.length || 0) == 0,
    },
    actions: {
        async doThinking(idea: Idea) {
            try {
                this.inProcesse = true
                const res = await api.think(idea)
                this.idea = {
                    name: this.idea.name,
                    description: this.idea.description,
                    instruction: res.instruction,
                    time: res.time
                }
            } catch (error) {
                console.log(error)
            }
        },
    }
})