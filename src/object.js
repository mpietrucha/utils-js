import { useTypeEquals } from '@/composables/useBuilder'
import { useFunction, useObject } from '@/composables/useType'
import { isUndefined } from '@/type'

export const types = [useObject(), useFunction()]

export const isType = useTypeEquals(...types)

export const is = isType

export const create = (property, value) => {
    if (isUndefined(property)) {
        return {}
    }

    return { [property]: value }
}

export const wrap = value => {
    if (is(value)) {
        return value
    }

    return create(property, value)
}

export const set = (source, property, value, options) => {
    source = wrap(source)

    return Object.defineProperty(source, property, { ...options, value })
}

export const has = (source, property) => property in source

export const value = (source, property, fallack) => {
    source = wrap(source)

    const { [property]: response = fallack } = source

    return response
}

export const get = (source, property, fallack) => {
    if (missing(source, property)) {
        return fallack
    }

    return value(source, property)
}

export const blank = (source, property) => {
    const value = get(source, property)

    return isUndefined(value)
}
