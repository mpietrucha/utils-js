import { useTagEquals } from '@/composables/useClosure'
import { useGenerator } from '@/composables/useTag'

export const tag = useGenerator()

export const isTag = useTagEquals(tag)

export const is = isTag
