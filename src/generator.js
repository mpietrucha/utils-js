import { useTagEquals } from '@/composables/useBuilder'
import { useGenerator } from '@/composables/useTag'

export const tag = useGenerator()

export const isTag = useTagEquals(tag)

export const is = isTag
