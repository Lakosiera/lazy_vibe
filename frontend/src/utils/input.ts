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