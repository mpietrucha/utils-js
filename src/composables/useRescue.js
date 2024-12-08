const errors = []

export const useError = error => {
    return errors.push(error)
}

export const useLastError = ({ error, rescue = true } = {}) => {
    error && useError(error)

    error = errors.pop()

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
