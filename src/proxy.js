import { useTagEquals } from '@/composables/useClosure'
import { useProxy } from '@/composables/useTag'

export const tag = useProxy()

export const isTag = useTagEquals(tag)

export const is = isTag
