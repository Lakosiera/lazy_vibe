import type { Search } from "@/entity/idea";

export const api = { search }

// TODO
// const baseUrl = "api"
const baseUrl = "demo/api"

async function search(text: string): Promise<Search[]> {
    const response = await fetch(`${baseUrl}/ideas.json`, {
        // method: "Get"
    })
    return await response.json()
}