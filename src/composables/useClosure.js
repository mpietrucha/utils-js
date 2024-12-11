import useTag from '@composables/useTag'
import useType from '@composables/useType'
import useValue from '@composables/useValue'

export const useRescue = value => {
    const { useRescue } = useValue()

    return (...parameters) => useRescue(value, ...parameters)
}

export const useNoop = () => {
    const { useNoop } = useValue()

    return useNoop
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

export const useEqualsValue = (...values) => {
    const { useEquals } = useValue()

    return value => useEquals(value, ...values)
}

export const useEqualsType = (...types) => {
    const { useEquals } = useType()

    return value => useEquals(value, ...types)
}

export const useEqualsTag = (...tags) => {
    const { useEquals } = useTag()

    return value => useEquals(value, ...tags)
}

export default () => ({
    useRescue,
    useNoop,
    useIdentity,
    useNegate,
    useConfirm,
    useEqualsValue,
    useEqualsType,
    useEqualsTag,
})
