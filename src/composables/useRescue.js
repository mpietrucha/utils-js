export const useValue = (value, ...parameters) => {
    try {
        return value(...parameters)
    } catch {}
}

export default useValue
