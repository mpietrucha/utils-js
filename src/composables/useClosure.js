import useValue from '@/composables/useValue'

export const useRescue = value => {
    const { useRescue } = useValue()

    return (...parameters) => useRescue(value, ...parameters)
}

export const useNoop = () => {
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

export const useTypeEquals = (...types) => {
    const { useTypeEquals } = useValue()

    return value => useTypeEquals(value, ...types)
}

export const useTagEquals = (...tags) => {
    const { useTagEquals } = useValue()

    return value => useTagEquals(value, ...tags)
}

export default () => ({
    useRescue,
    useNoop,
    useIdentity,
    useNegate,
    useConfirm,
    useEquals,
    useTypeEquals,
    useTagEquals,
})
