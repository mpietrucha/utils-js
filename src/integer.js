import { useRescue } from '@/composables/useClosure'
import { is as isNumber } from '@/number'

export const { isInteger } = Number

export const isNative = useRescue(isInteger)

export const isRaw = value => isNumber(value) && value % 1 === 0

export const is = value => isNative(value) ?? isRaw(value)
