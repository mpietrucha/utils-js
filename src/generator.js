import { useEqualsTag } from '@composables/useClosure'
import { useGenerator } from '@composables/useTag'

export const tag = useGenerator()

export const isTag = useEqualsTag(tag)

export const is = isTag
