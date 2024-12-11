import { useEqualsTag } from '@composables/useClosure'
import { useAsync } from '@composables/useTag'

export const tag = useAsync()

export const isTag = useEqualsTag(tag)

export const is = isTag
