import { usePrototype } from '@composables/useObject'
import { useEquals as useEqualsValue, useRescue } from '@composables/useValue'

export const useAsync = () => {
    return '[object AsyncFunction]'
}

export const useProxy = () => {
    return '[object Proxy]'
}

export const useArray = () => {
    return '[object Array]'
}

export const useString = () => {
    return '[object String]'
}

export const useNumber = () => {
    return '[object Number]'
}

export const useBoolean = () => {
    return '[object Boolean]'
}

export const useFunction = () => {
    return '[object Function]'
}

export const useGenerator = () => {
    return '[object GeneratorFunction]'
}

export const useValue = value => {
    const { toString } = usePrototype()

    const tag = useRescue(() => toString.call(value))

    if (tag) {
        return tag
    }

    throw new Error('Interrupted `Object.toString` implementation.')
}

export const useEquals = (value, ...tags) => {
    const tag = useValue(value)

    return useEqualsValue(tag, ...tags)
}

export default () => ({
    useAsync,
    useProxy,
    useArray,
    useString,
    useNumber,
    useBoolean,
    useFunction,
    useGenerator,
    useValue,
    useEquals,
})
