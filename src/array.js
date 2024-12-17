import { is as isUndefined } from '@/undefined'
import { useEqualsTag, useRescue } from '@composables/useClosure'
import { useArray } from '@composables/useTag'

export const tag = useArray()

export const { isArray } = Array

export const isTag = useEqualsTag(tag)

export const isNative = useRescue(isArray)

export const is = value => {
    return isNative(value) ?? isTag(value)
}

export const wrap = value => {
    if (is(value)) {
        return value
    }

    if (isUndefined(value)) {
        return []
    }

    return [value]
}

export const append = (value, ...append) => {
    value = wrap(value)

    value.push(...append)

    return value
}

export const prepend = (value, ...prepend) => {
    value = wrap(value)

    value.unshift(...prepend)

    return value
}

export const flat = (value, deep = Infinity) => {
    value = wrap(value)

    return value.flat(deep)
}

export const join = (...values) => {
    const value = values.map(wrap)

    return flat(value, 1)
}
