import type { Idea } from "@/entity/idea";
import { isGitHub } from "@/utils/utils";

export const api = { 
    search, 
    think, 
    ideaReadAll, 
    ideaCreate, 
    ideaRead, 
    ideaUpdate, 
    ideaDelete
}

const BASE_URL = import.meta.env.BASE_URL
const BASE = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`
const BASE_API_URL = (!isGitHub()) ? `${BASE}api` : `${BASE}demo/api`
const SUFFIX = (!isGitHub()) ? "" : ".json"

async function search(text: string): Promise<Idea[]> {
    const response = await fetch(`${BASE_API_URL}/search${SUFFIX}`, {
        method: "GET"
    })
    return await response.json()
}

async function think(idea: Idea): Promise<Idea> {
    const response = await fetch(`${BASE_API_URL}/think${SUFFIX}`, {
        method: "GET"
    })
    return await response.json()
}

async function ideaReadAll(): Promise<Idea[]> {
    const response = await fetch(`${BASE_API_URL}/ideas${SUFFIX}`, {
        method: "GET"
    })
    return await response.json()
}

async function ideaCreate(idea: Idea): Promise<Idea> {
    const response = await fetch(`${BASE_API_URL}/ideas${SUFFIX}`, {
        method: "POST",
        body: JSON.stringify(idea)
    })
    return await response.json()
}

async function ideaRead(id: number): Promise<Idea> {
    const response = await fetch(`${BASE_API_URL}/ideas/${id}${SUFFIX}`, {
        method: "GET"
    })
    return await response.json()
}

async function ideaUpdate(id: number, idea: Idea): Promise<Idea> {
    const response = await fetch(`${BASE_API_URL}/ideas/${id}${SUFFIX}`, {
        method: "PATCH",
        body: JSON.stringify(idea)
    })
    return await response.json()
}

async function ideaDelete(id: number): Promise<any> {
    const response = await fetch(`${BASE_API_URL}/ideas/${id}${SUFFIX}`, {
        method: "DELETE"
    })
    return await response.json()
}
