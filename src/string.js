import { useTagEquals } from '@/composables/useBuilder'
import { useString } from '@/composables/useTag'

export const tag = useString()

export const isTag = useTagEquals(tag)

export const is = isTag
