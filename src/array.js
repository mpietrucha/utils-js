import { useEqualsTag, useRescue } from '@composables/useClosure'
import { useArray } from '@composables/useTag'

export const tag = useArray()

export const { isArray } = Array

export const isTag = useEqualsTag(tag)

export const isNative = useRescue(isArray)

export const is = value => {
    return isNative(value) ?? isTag(value)
}
