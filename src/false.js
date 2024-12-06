import { useEquals } from '@/composables/useBuilder'
import { useFalse } from '@/composables/useValue'

export const value = useFalse()

export const isValue = useEquals(value)

export const is = isValue
