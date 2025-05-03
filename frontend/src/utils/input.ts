import type { Ref } from "vue";

//https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940
export function debounce<T extends (...args: any[]) => any>(callback: T, waitFor: number = 300) {
    let timer: ReturnType<typeof setTimeout>
    return (...args: Parameters<T>) => {
        let result: any;
        clearTimeout(timer)
        timer = setTimeout(() => {
            result = callback(...args)
        }, waitFor)
        return result
    }
}

export function typeWriter(text: string, waitFor: number, onAdd: (line: string) => void, done: () => void) {
    const textLines = text.split("\n")
    for (let index = 0; index < textLines.length; index++) {
        const line = textLines[index];
        setTimeout(() => {
            onAdd(line + "\n")

            if (index + 1 >= textLines.length) {
                done()
            }

        }, waitFor * index + 1)
    }
}