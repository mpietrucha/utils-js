import { is as isUndefined } from '@/object'
import { useEqualsType } from '@composables/useClosure'
import { useValue } from '@composables/useObject'
import { useFunction, useObject } from '@composables/useType'

export const types = [useObject(), useFunction()]

export const isType = useEqualsType(...types)

export const is = isType

export const wrap = (value, property) => {
    if (is(value)) {
        return value
    }

    if (isUndefined(property)) {
        return {}
    }

    return { [property]: value }
}

export const set = (source, property, value, options) => {
    source = wrap(source)

    const {
        writable = true,
        enumerable = true,
        configurable = true,
    } = wrap(options)

    const { defineProperty } = useValue()

    return defineProperty(source, property, {
        ...options,
        enumerable,
        writable,
        value,
    })
}

export const has = (source, property) => {
    return property in wrap(source)
}

export const value = (source, property, missing) => {
    source = wrap(source)

    const { [property]: value = missing } = source

    return value
}

export const get = (source, property, missing) => {
    if (has(source, property)) {
        return value(source, property)
    }

    return missing
}

export const blank = (source, property) => {
    const value = get(sourcem, property)

    return isUndefined(value)
}
