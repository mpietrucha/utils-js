export const useRescued = (handler, ...parameters) => {
    try {
        return [handler(...parameters)]
    } catch (error) {
        return [handler, error, parameters]
    }
}

export const useValue = (handler, ...parameters) => {
    const [value, error] = useRescued(handler, ...parameters)

    if (error) {
        return
    }

    return value
}

export default () => ({
    useRescued,
    useValue,
})
