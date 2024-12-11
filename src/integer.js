import { is as isNumber } from '@/number'
import { useRescue } from '@composables/useClosure'

export const { isInteger } = Number

export const isNative = useRescue(isInteger)

export const isRaw = value => {
    return isNumber(value) && value % 1 === 0
}

export const is = value => {
    return isNative(value) ?? isRaw(value)
}
