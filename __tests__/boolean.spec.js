import * as Boolean from '@/boolean'
import { describe, expect, test } from '@test'

describe('tag', () => {
    test('`tag` is `[object Boolean]` string', () => {
        const { tag } = Boolean

        expect(tag).toBe('[object Boolean]')
    })

    const { isTag } = Boolean

    test('`isTag` returns `true` for boolean values', ({ booleans }) => {
        booleans.forEach(value => {
            const shouldBeTrue = isTag(value)

            expect(shouldBeTrue).toBe(true)
        })
    })

    test('`isTag` returns `false` for non-boolean values', ({
        without,
        booleans,
    }) => {
        without(...booleans).forEach(value => {
            const shouldBeFalse = isTag(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('value', () => {
    const { values, isValue } = Boolean

    test('`values` is array containg `true`', () => {
        const arrayContaingTrue = expect.arrayContaining([true])

        expect(values).toEqual(arrayContaingTrue)
    })

    test('`values` is array containg `false`', () => {
        const arrayContainingFalse = expect.arrayContaining([false])

        expect(values).toEqual(arrayContainingFalse)
    })

    test('`isValue` returns `true` for boolean values', ({ booleans }) => {
        booleans.forEach(value => {
            const shouldBeTrue = isValue(true)

            expect(shouldBeTrue).toBe(true)
        })
    })

    test('`isValue` returns `false` for non-boolan values', ({
        without,
        booleans,
    }) => {
        without(...booleans).forEach(value => {
            const shouldBeFalse = isValue(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('is', () => {
    const { is } = Boolean

    test('`is` returns `true` for boolean values', () => {
        const shouldBeTrueForTrue = is(true)

        const shouldBeTrueForFalse = is(false)

        expect(shouldBeTrueForTrue).toBe(true)

        expect(shouldBeTrueForFalse).toBe(true)
    })

    test('`is` returns `false` for non-boolan values', ({
        without,
        booleans,
    }) => {
        without(...booleans).forEach(value => {
            const shouldBeFalse = is(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})
