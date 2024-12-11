import { useEqualsTag } from '@composables/useClosure'
import { useString } from '@composables/useTag'

export const tag = useString()

export const isTag = useEqualsTag(tag)

export const is = isTag
