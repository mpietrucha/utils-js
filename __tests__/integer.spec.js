import * as Integer from '@/integer'
import { describe, expect, test } from '@test'

describe('native', () => {
    const { isNative } = Integer

    test('`isNative` returns `true` for integer values', ({ integer }) => {
        const shouldBeTrue = isNative(integer)

        expect(shouldBeTrue).toBe(true)
    })

    test('`isNative` returns `false` for non-integer values', ({
        without,
        integer,
    }) => {
        without(integer).forEach(value => {
            const shouldBeFalse = isNative(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('raw', () => {})
