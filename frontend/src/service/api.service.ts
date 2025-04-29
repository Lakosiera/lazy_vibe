import type { Search } from "@/entity/search";

export const api = { search }

async function search(text: string): Promise<Search | null> {
    let response = await fetch("/api/search", {
        method: "Get"
    })

    let json = await response.json()
    // if (response.status != 200) throw new Error(json.error)
    return json
}