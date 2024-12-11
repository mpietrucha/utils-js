import { useEqualsValue } from '@/composables/useClosure'
import { useUndefined } from '@/composables/useValue'

export const value = useUndefined()

export const isValue = useEqualsValue(value)

export const is = isValue
