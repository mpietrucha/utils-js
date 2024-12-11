import { useEqualsTag, useRescue } from '@composables/useClosure'
import { useNumber } from '@composables/useTag'

export const tag = useNumber()

export const { isNumber } = Number

export const isTag = useEqualsTag(tag)

export const isNative = useRescue(isNumber)

export const is = value => {
    return isNative(value) ?? isTag(value)
}
