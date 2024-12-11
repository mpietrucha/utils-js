import { useEqualsTag } from '@composables/useClosure'
import { useFunction } from '@composables/useTag'

export const tag = useFunction()

export const isTag = useEqualsTag(tag)

export const is = isTag
