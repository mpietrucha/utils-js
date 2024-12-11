import { useEqualsValue } from '@composables/useClosure'
import { useFalse } from '@composables/useValue'

export const value = useFalse()

export const isValue = useEqualsValue(value)

export const is = isValue
