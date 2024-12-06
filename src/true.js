import { useEquals } from '@/composables/useBuilder'
import { useTrue } from '@/composables/useValue'

export const value = useTrue()

export const isValue = useEquals(value)

export const is = isValue
