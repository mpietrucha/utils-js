import * as Closure from '@/closure'
import { useIdentity as identity, useRescue } from '@composables/useValue'

export { identity }

export {
    useConfirm as confirm,
    useNegate as negate,
    useNoop as noop,
} from '@composables/useValue'

export const assign = (value, options) => {
    if (Closure.is(value)) {
        return Closure.assign(value, options)
    }

    return value
}

export const get = (value, ...parameters) => {
    if (Closure.is(value)) {
        return Closure.get(value, ...parameters)
    }

    return value
}

export const rescue = (...parameters) => {
    return useRescue(get, ...parameters)
}
