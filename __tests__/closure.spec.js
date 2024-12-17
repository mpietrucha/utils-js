import * as Closure from '@/closure'
import { describe, expect, test } from '@test'

test('`identity` returns closure which returns value', ({ string }) => {
    const { identity } = Closure

    const shouldBeIdentityClosure = identity(string)

    expect(shouldBeIdentityClosure).not.toThrowError()

    expect(shouldBeIdentityClosure()).toBe(string)
})

describe('confirm', () => {
    const { confirm } = Closure

    test('`confirm` returns closure which confirms truthy value', ({
        array,
    }) => {
        const shouldBeConfirmClosure = confirm(array)

        expect(shouldBeConfirmClosure).not.toThrowError()

        expect(shouldBeConfirmClosure()).toBe(true)
    })

    test('`confirm` returns closure which confirms falsy value', ({
        string,
    }) => {
        const shouldBeConfirmClosure = confirm(string)

        expect(shouldBeConfirmClosure).not.toThrowError()

        expect(shouldBeConfirmClosure()).toBe(false)
    })
})

describe('negate', () => {
    const { negate } = Closure

    test('`negate` returns closure which negates truthy values', ({
        array,
    }) => {
        const shouldBeNegateClosure = negate(array)

        expect(shouldBeNegateClosure).not.toThrowError()

        expect(shouldBeNegateClosure()).toBe(false)
    })

    test('`negate` returns closure which negates falsy values', ({
        string,
    }) => {
        const shouldBeNegateClosure = negate(string)

        expect(shouldBeNegateClosure).not.toThrowError()

        expect(shouldBeNegateClosure()).toBe(true)
    })
})

test('`noop` returns closure which returns `undefined`', () => {
    const { noop } = Closure

    const shouldBeNoopClosure = noop()

    expect(shouldBeNoopClosure).not.toThrowError()

    expect(shouldBeNoopClosure()).toBeUndefined()
})

describe('tag', () => {
    const { tags, isTag } = Closure

    test('`tags` is array containg `[object Proxy]` string', () => {
        const arrayContainingTag = expect.arrayContaining(['[object Proxy]'])

        expect(tags).toEqual(arrayContainingTag)
    })

    test('`tags` is array containg `[object AsyncFunction]` string', () => {
        const arrayContainingTag = expect.arrayContaining([
            '[object AsyncFunction]',
        ])

        expect(tags).toEqual(arrayContainingTag)
    })

    test('`tags` is array containg `[object Function]` string', () => {
        const arrayContainingTag = expect.arrayContaining(['[object Function]'])

        expect(tags).toEqual(arrayContainingTag)
    })

    test('`tags` is array containg `[object GeneratorFunction]` string', () => {
        const arrayContainingTag = expect.arrayContaining([
            '[object GeneratorFunction]',
        ])

        expect(tags).toEqual(arrayContainingTag)
    })

    test('`isTag` returns `true` for closure values', ({ closures }) => {
        closures.forEach(value => {
            const shouldBeTrue = isTag(value)

            expect(shouldBeTrue).toBe(true)
        })
    })

    test('`isTag` returns `true` form non-closure values', ({
        closures,
        without,
    }) => {
        without(...closures).forEach(value => {
            const shouldBeFalse = isTag(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('is', () => {
    const { is } = Closure

    test('`is` returns `true` for closure values', ({ closures }) => {
        closures.forEach(value => {
            const shouldBeTrue = is(value)

            expect(shouldBeTrue).toBe(true)
        })
    })

    test('`is` returns `false` for non-cloure values', ({
        closures,
        without,
    }) => {
        without(...closures).forEach(value => {
            const shouldBeFalse = is(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('wrap', () => {
    const { wrap } = Closure

    test('`wrap` returns value for closure values', ({ closures }) => {
        closures.forEach(value => {
            const shouldBeValueClosure = wrap(value)

            expect(shouldBeValueClosure).toBe(value)
        })
    })

    test('`wrap` returns closure which returns value for non-closure values', ({
        closures,
        without,
    }) => {
        without(...closures).forEach(value => {
            const shouldBeValueClosure = wrap(value)

            expect(shouldBeValueClosure).not.toThrowError()

            expect(shouldBeValueClosure()).toBe(value)
        })
    })
})

describe('rescue', () => {
    const { rescue } = Closure

    test('`rescue` returns closure which returns `undefined` for error throwing values', () => {
        const shouldBeUndefinedClosure = rescue(() => {
            throw new Error()
        })

        expect(shouldBeUndefinedClosure).not.toThrowError()

        expect(shouldBeUndefinedClosure()).toBeUndefined()
    })

    test('`rescue` returns closure which returns value for non-error throwing values', ({
        closures,
        without,
    }) => {
        without(...closures).forEach(value => {
            const shouldBeValueClosure = rescue(value)

            expect(shouldBeValueClosure).not.toThrowError()

            expect(shouldBeValueClosure()).toBe(value)
        })
    })
})

describe('assign', () => {
    const { assign } = Closure

    test('`assign` returns closure which returns value for non-closure values', ({
        closures,
        without,
    }) => {
        without(...closures).forEach(value => {
            const shouldBeValueClosure = assign(value)

            expect(shouldBeValueClosure).not.toThrowError()

            expect(shouldBeValueClosure()).toBe(value)
        })
    })

    test('`assign` returns closure with bound wrapped arguments', () => {
        const options = { prepend: [1], parameters: [2], append: [3] }

        const shouldBeArgumentsClosure = assign((a, b, c) => {
            return [a, b, c]
        }, options)

        expect(shouldBeArgumentsClosure).not.toThrowError()

        expect(shouldBeArgumentsClosure()).toEqual(
            Object.values(options).flat(),
        )
    })

    test('`assign` returns closure with bound unwrapped arguments', () => {
        const options = { prepend: 1, parameters: 2, append: 3 }

        const shouldBeArgumentsClosure = assign((a, b, c) => {
            return [a, b, c]
        }, options)

        expect(shouldBeArgumentsClosure).not.toThrowError()

        expect(shouldBeArgumentsClosure()).toEqual(Object.values(options))
    })

    test('`assign` returns closure with bound `this`', ({ string }) => {
        const options = { bind: string }

        const shouldBeStringClosure = assign(function () {
            return this
        }, options)

        expect(shouldBeStringClosure).not.toThrowError()

        expect(shouldBeStringClosure()).toBe(string)
    })
})

describe('get', () => {
    const { get } = Closure

    test('`get` returns value for non-closure values', ({ string }) => {
        const shouldBeString = get(string)

        expect(shouldBeString).toBe(string)
    })

    test('`get` returns return value for closure values', ({ string }) => {
        const shouldBeString = get(() => string)

        expect(shouldBeString).toBe(string)
    })
})
