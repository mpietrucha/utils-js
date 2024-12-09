import { useRescue } from '@/composables/useClosure'
import { is as isNumber } from '@/number'

export const { isNaN } = Number

export const isNative = useRescue(isNaN)

export const isRaw = value => isNumber(value) && value != +value

export const is = value => isNative(value) ?? isRaw(value)
