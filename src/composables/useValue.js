import { useValue as useRescue } from '@composables/useRescue'

export { useRescue }

export const useNull = () => {
    return null
}

export const useTrue = () => {
    return true
}

export const useFalse = () => {
    return false
}

export const useUndefined = () => {
    return undefined
}

export const useNoop = useUndefined

export const useIdentity = value => {
    return value
}

export const useNegate = value => {
    return !value
}

export const useConfirm = value => {
    return !!value
}

export const useEquals = (value, ...values) => {
    return values.includes(value)
}

export default () => ({
    useRescue,
    useNull,
    useTrue,
    useFalse,
    useUndefined,
    useNoop,
    useIdentity,
    useNegate,
    useConfirm,
    useEquals,
})
