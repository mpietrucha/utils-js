import * as False from '@/false'
import { describe, expect, test } from '@test'

describe('value', () => {
    const { value, isValue } = False

    test('`value` is `false`', () => {
        expect(value).toBe(false)
    })

    test('`isValue` returns `true` for `false` value', () => {
        const shouldBeTrue = isValue(false)

        expect(shouldBeTrue).toBe(true)
    })

    test('`isValue` returns `false` for non-false value', ({ without }) => {
        without(false).forEach(value => {
            const shouldBeFalse = isValue(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('is', () => {
    const { is } = False

    test('`is` returns `true` for `false` value', () => {
        const shouldBeTrue = is(false)

        expect(shouldBeTrue).toBe(true)
    })

    test('`is` returns `false` for non-false value', ({ without }) => {
        without(false).forEach(value => {
            const shouldBeFalse = is(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})
