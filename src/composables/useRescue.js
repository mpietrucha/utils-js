const errors = []

export const useError = error => {
    return errors.push(error)
}

export const useLastError = ({ rescue = true } = {}) => {
    const error = errors.pop()

    if (!error) {
        return
    }

    if (!rescue) {
        throw error
    }

    return error
}

export const useValue = (value, ...parameters) => {
    useLastError()

    try {
        return value(...parameters)
    } catch (error) {
        useError(error)
    }
}

export default () => ({ useError, useLastError, useValue })
