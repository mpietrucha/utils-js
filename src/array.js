import { useRescue, useTagEquals } from '@/composables/useBuilder'
import { useArray } from '@/composables/useTag'
import { isUndefined } from '@/type'

export const { isArray } = Array

export const tag = useArray()

export const isTag = useTagEquals(tag)

export const isNative = useRescue(isArray)

export const is = value => isNative(value) || isTag(value)

export const create = (...values) => values

export const flatten = (...values) => values.flat(Infinity)

export const wrap = value => {
    if (is(value)) {
        return value
    }

    if (isUndefined(value)) {
        return create()
    }

    return create(value)
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
