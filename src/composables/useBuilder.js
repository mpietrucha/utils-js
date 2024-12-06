import useContext from '@/composables/useContext'

export const useNoop = value => {
    const { useNoop } = useContext()

    return () => useNoop()
}

export const useIdentity = value => {
    const { useIdentity } = useContext()

    return () => useIdentity(value)
}

export const useNegate = value => {
    const { useNegate } = useContext()

    return () => useNegate(value)
}

export const useConfirm = value => {
    const { useConfirm } = useContext()

    return () => useConfirm(value)
}

export const useRescue = value => {
    const { useRescue } = useContext()

    return (...parameters) => useRescue(value, ...parameters)
}

export const useEquals = (...values) => {
    const { useEquals } = useContext()

    return value => useEquals(value, ...values)
}

export const useTagEquals = (...tags) => {
    const { useTagEquals } = useContext()

    return value => useTagEquals(value, ...tags)
}

export const useTypeEquals = (...types) => {
    const { useTypeEquals } = useContext()

    return value => useTypeEquals(value, ...types)
}

export default () => ({
    useIdentity,
    useConfirm,
    useNegate,
    useRescue,
    useEquals,
    useTagEquals,
    useTypeEquals,
})
