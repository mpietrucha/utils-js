import { usePrototype } from '@/composables/useObject'
import { useValue } from '@/composables/useRescue'

export const useRescue = useValue

export const useNoop = () => {}

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

export const useType = value => {
    return typeof value
}

export const useTypeEquals = (value, ...types) => {
    const type = useType(value)

    return useEquals(type, ...types) && useConfirm(value)
}

export const useTag = value => {
    const { toString } = usePrototype()

    const tag = useRescue(() => toString.call(value))

    if (tag) {
        return tag
    }

    throw new Error('Interrupted `Object.toString` implementation.')
}

export const useTagEquals = (value, ...tags) => {
    const tag = useTag(value)

    return useEquals(tag, ...tags)
}

export default () => ({
    useRescue,
    useNoop,
    useIdentity,
    useNegate,
    useConfirm,
    useEquals,
    useType,
    useTypeEquals,
    useTag,
    useTagEquals,
})
