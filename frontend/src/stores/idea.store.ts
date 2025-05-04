import { defineStore } from 'pinia'
import { api } from '@/service/api.service'
import type { Idea } from '@/entity/idea'

const STORE_NAME = 'idea'

interface State {
    current: Idea
    all: Idea[]
    count: number
}

const defaultState: State = {
    current: {},
    all: [],
    count: 0
}

export const useIdeaStore = defineStore(STORE_NAME, {
    state: (): State => {
        return defaultState
    },
    getters: {
    },
    actions: {
        async doReadAll() {
            try {
                this.all = await api.ideaReadAll()
                this.count = this.all.length
            } catch (error) {
                console.log(error)
            }
        },
        async doCreate(idea: Idea) {
            try {
                this.current = await api.ideaCreate(idea)
            } catch (error) {
                console.log(error)
            }
        },
        async doRead(id: number) {
            try {
                this.current = await api.ideaRead(id)
            } catch (error) {
                console.log(error)
            }
        },
        async doUpdate(idea: Idea) {
            try {
                if (idea.id == null) throw new Error("ID не задан");
                this.current = await api.ideaUpdate(idea.id, idea)
            } catch (error) {
                console.log(error)
            }
        },
        async doDelete(id?: number) {
            try {
                if (id == null) throw new Error("ID не задан");
                this.current = await api.ideaDelete(id)
            } catch (error) {
                console.log(error)
            }
        },
    }
})