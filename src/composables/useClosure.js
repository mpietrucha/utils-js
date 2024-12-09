import useValue from '@/composables/useValue'

export const useNoop = value => {
    const { useNoop } = useValue()

    return () => useNoop()
}

export const useIdentity = value => {
    const { useIdentity } = useValue()

    return () => useIdentity(value)
}

export const useNegate = value => {
    const { useNegate } = useValue()

    return () => useNegate(value)
}

export const useConfirm = value => {
    const { useConfirm } = useValue()

    return () => useConfirm(value)
}

export const useEquals = (...values) => {
    const { useEquals } = useValue()

    return value => useEquals(value, ...values)
}

export const useTagEquals = (...tags) => {
    const { useTagEquals } = useValue()

    return value => useTagEquals(value, ...tags)
}

export const useTypeEquals = (...types) => {
    const { useTypeEquals } = useValue()

    return value => useTypeEquals(value, ...types)
}

export const useRescue = handler => {
    const { useRescue } = useValue()

    return (...parameters) => useRescue(handler, ...parameters)
}

export default () => ({
    useNoop,
    useIdentity,
    useNegate,
    useConfirm,
    useEquals,
    useTagEquals,
    useTypeEquals,
    useRescue,
})
