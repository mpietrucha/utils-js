import { useEquals } from '@/composables/useClosure'
import { useUndefined } from '@/composables/useValue'

export const value = useUndefined()

export const isValue = useEquals(value)

export const is = isValue
