import * as Closure from '@/closure'
import useRescue from '@/composables/useRescue'
import { useIdentity } from '@/composables/useValue'
import * as Object from '@/object'

export const identity = useIdentity

export {
    useConfirm as confirm,
    useEquals as equals,
    useNegate as negate,
    useNoop as noop,
    useRescue as rescue,
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

export const build = () => {
    value = assign(value, options)

    const { useValue, useLastError } = useRescue()

    const { tap, pipe = identity, rescue = false } = Object.wrap(options)

    const response = useValue(get, value)

    useLastError(rescue)

    get(tap, response)

    return get(pipe, response)
}

export const tap = (value, tap, options) => {
    return build(value, { ...options, tap })
}

export const pipe = (value, pipe, options) => {
    return build(value, { ...options, pipe })
}
