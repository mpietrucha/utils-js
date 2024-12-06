import { useTagEquals } from '@/composables/useBuilder'
import { useAsync } from '@/composables/useTag'

export const tag = useAsync()

export const isTag = useTagEquals(tag)

export const is = isTag
