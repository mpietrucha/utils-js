import * as Array from '@/array'
import {
    useAsync,
    useFunction,
    useGenerator,
    useProxy,
} from '@/composables/useTag'
import * as Object from '@/object'
import {
    useIdentity as identity,
    useEqualsTag,
    useRescue,
} from '@composables/useClosure'

export { identity }

export {
    useConfirm as confirm,
    useNegate as negate,
    useNoop as noop,
} from '@composables/useClosure'

export const tags = [useProxy(), useAsync(), useFunction(), useGenerator()]

export const isTag = useEqualsTag(...tags)

export const is = isTag

export const wrap = value => {
    if (is(value)) {
        return value
    }

    return identity(value)
}

export const rescue = value => {
    value = wrap(value)

    return useRescue(value)
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
