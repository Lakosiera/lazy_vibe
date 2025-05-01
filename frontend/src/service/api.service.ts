import type { Idea } from "@/entity/idea";
import { isGitHub } from "@/utils/utils";

export const api = { search, think }

const BASE_API_URL = (!isGitHub()) ? "api" : "demo/api"
const SUFFIX = (!isGitHub()) ? "" : ".json"

async function search(text: string): Promise<Idea[]> {
    const response = await fetch(`${BASE_API_URL}/ideas${SUFFIX}`, {
        // method: "Get"
    })
    return await response.json()
}

async function think(idea: Idea): Promise<Idea> {
    const response = await fetch(`${BASE_API_URL}/think${SUFFIX}`, {
        // method: "Get"
    })
    return await response.json()
}