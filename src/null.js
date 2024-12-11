import { useEqualsValue } from '@composables/useClosure'
import { useNull } from '@composables/useValue'

export const value = useNull()

export const isValue = useEqualsValue(value)

export const is = isValue
