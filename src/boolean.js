import { useEqualsTag, useEqualsValue } from '@composables/useClosure'
import { useBoolean } from '@composables/useTag'
import { useFalse, useTrue } from '@composables/useValue'

export const tag = useBoolean()

export const isTag = useEqualsTag(tag)

export const values = [useTrue(), useFalse()]

export const isValue = useEqualsValue(...values)

export const is = value => {
    return isValue(value) || isTag(value)
}
