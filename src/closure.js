import * as Array from '@/array'
import { useIdentity, useTagEquals } from '@/composables/useBuilder'
import {
    useAsync,
    useFunction,
    useGenerator,
    useProxy,
} from '@/composables/useTag'
import * as Object from '@/object'

export {
    useConfirm as confirm,
    useNegate as negate,
    useNoop as noop,
    useRescue as rescue,
} from '@/composables/useBuilder'

export const identity = useIdentity

export const tags = [useProxy(), useAsync(), useFunction(), useGenerator()]

export const isTag = useTagEquals(...tags)

export const is = isTag

export const wrap = value => {
    if (is(value)) {
        return value
    }

    return identity(value)
}

export const assign = (value, options) => {
    const { bind, append, prepend, parameters } = Object.wrap(options)

    return wrap(value).bind(bind, ...Array.flatten(prepend, value, append))
}

export const get = (value, ...parameters) => {
    value = assign(value, { parameters })

    return value()
}
