import { useEqualsTag } from '@composables/useClosure'
import { useNumber } from '@composables/useTag'

export const tag = useNumber()

export const isTag = useEqualsTag(tag)

export const is = isTag
