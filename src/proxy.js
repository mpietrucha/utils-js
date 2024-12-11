import { useEqualsTag } from '@composables/useClosure'
import { useProxy } from '@composables/useTag'

export const tag = useProxy()

export const isTag = useEqualsTag(tag)

export const is = isTag
