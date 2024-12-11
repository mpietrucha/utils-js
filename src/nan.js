import { is as isNumber } from '@/number'
import { useRescue } from '@composables/useClosure'

export const { isNaN } = Number

export const isNative = useRescue(isNaN)

export const isRaw = value => {
    return isNumber(value) && value != +value
}

export const is = value => {
    return isNative(value) ?? isRaw(value)
}
