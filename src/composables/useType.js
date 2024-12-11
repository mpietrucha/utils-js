import { useConfirm, useEquals as useEqualsValue } from '@composables/useValue'

export const useObject = () => {
    return 'object'
}

export const useFunction = () => {
    return 'function'
}

export const useValue = value => {
    return typeof value
}

export const useEquals = (value, ...types) => {
    const type = useValue(value)

    return useEqualsValue(type, ...types) && useConfirm(value)
}

export default () => ({
    useObject,
    useFunction,
    useValue,
    useEquals,
})
