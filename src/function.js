import { useEquals } from '@/composables/useBuilder'
import { useFunction } from '@/composables/useTag'

export const tag = useFunction()

export const isTag = useEquals(tag)

export const is = isTag
