import * as Function from '@/function'
import { describe, expect, test } from '@test'

describe('tag', () => {
    test('`tag` is `[object Function]` string', () => {
        const { tag } = Function

        expect(tag).toBe('[object Function]')
    })

    const { isTag } = Function

    test('`isTag` returns `true` for function values', ({ fn }) => {
        const shouldBeTrue = isTag(fn)

        expect(shouldBeTrue).toBe(true)
    })

    test('`isTag` returns `false` for non-function values', ({
        fn,
        without,
    }) => {
        without(fn).forEach(value => {
            const shouldBeFalse = isTag(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('is', () => {
    const { is } = Function

    test('`is` returns `true` for function values', ({ fn }) => {
        const shouldBeTrue = is(fn)

        expect(shouldBeTrue).toBe(true)
    })

    test('`is` returns `false` for non-function values', ({ fn, without }) => {
        without(fn).forEach(value => {
            const shouldBeFalse = is(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})
