import { useRescue, useTagEquals } from '@/composables/useBuilder'
import { useNumber } from '@/composables/useTag'

export const { isNumber } = Number

export const tag = useNumber()

export const isTag = useTagEquals(tag)

export const isNative = useRescue(isNumber)

export const is = value => isNative(value) ?? isTag(value)
