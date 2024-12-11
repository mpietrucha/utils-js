import { useEqualsType } from '@composables/useClosure'
import { useFunction, useObject } from '@composables/useType'

export const types = [useObject(), useFunction()]

export const isType = useEqualsType(...types)

export const is = isType
