import { useType, useTypeEquals } from '@/composables/useValue'

export const useValue = useType

export const useEquals = useTypeEquals

export const useObject = () => 'object'

export const useFunction = () => 'function'

export default () => ({
    useValue,
    useEquals,
    useObject,
    useFunction,
})
