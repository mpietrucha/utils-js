import { useEquals, useTagEquals } from '@/composables/useBuilder'
import { useBoolean } from '@/composables/useTag'
import { useFalse, useTrue } from '@/composables/useValue'

export const tag = useBoolean()

export const isTag = useTagEquals(tag)

export const values = [useTrue(), useFalse()]

export const isValue = useEquals(...values)

export const is = value => isValue(value) || isTag(value)
