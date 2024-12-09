import * as Closure from '@/closure'
import { useLastError } from '@/composables/useRescue'
import { useIdentity, useRescue } from '@/composables/useValue'
import * as Object from '@/object'

export const identity = useIdentity

export {
    useConfirm as confirm,
    useEquals as equals,
    useNegate as negate,
    useNoop as noop,
} from '@/composables/useValue'

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

export const rescue = (value, ...parameters) => {
    return useRescue(get, value, ...parameters)
}

export const build = (value, options) => {
    value = assign(value, options)

    const { tap, pipe = identity, quiet = false } = Object.wrap(options)

    const response = rescue(get, value)

    useLastError(quiet)

    get(tap, response)

    return get(pipe, response)
}

export const tap = (value, tap, options) => {
    return build(value, { ...options, tap })
}

export const pipe = (value, pipe, options) => {
    return build(value, { ...options, pipe })
}
