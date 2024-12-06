import { useEquals } from '@/composables/useBuilder'
import { useNull } from '@/composables/useValue'

export const value = useNull()

export const isValue = useEquals(value)

export const is = isValue
