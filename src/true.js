import { useEqualsValue } from '@composables/useClosure'
import { useTrue } from '@composables/useValue'

export const value = useTrue()

export const isValue = useEqualsValue(value)

export const is = isValue
