import * as Array from '@/array'
import { useIdentity, useTagEquals } from '@/composables/useClosure'
import {
    useAsync,
    useFunction,
    useGenerator,
    useProxy,
} from '@/composables/useTag'
import * as Object from '@/object'

export const identity = useIdentity

export {
    useConfirm as confirm,
    useNegate as negate,
    useNoop as noop,
} from '@/composables/useClosure'

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
    value = wrap(value)

    const { bind, append, prepend, parameters } = Object.wrap(options)

    return value.bind(bind, ...Array.join(prepend, parameters, append))
}

export const get = (value, ...parameters) => {
    value = assign(value, { parameters })

    return value()
}
