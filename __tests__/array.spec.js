import * as Array from '@/array'
import { describe, expect, test } from '@test'

describe('tag', () => {
    test('`tag` is `[object Array]` string', () => {
        const { tag } = Array

        expect(tag).toBe('[object Array]')
    })

    const { isTag } = Array

    test('`isTag` returns `true` for array values', ({ array }) => {
        const shouldBeTrue = isTag(array)

        expect(shouldBeTrue).toBe(true)
    })

    test('`isTag` returns `false` for non-array values', ({
        array,
        without,
    }) => {
        without(array).forEach(value => {
            const shouldBeFalse = isTag(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('native', () => {
    const { isNative } = Array

    test('`isNative` returns `true` for arrays values', ({ array }) => {
        const shouldBeTrue = isNative(array)

        expect(shouldBeTrue).toBe(true)
    })

    test('`isNative` returns `false` for non-arrays values', ({
        array,
        without,
    }) => {
        without(array).forEach(value => {
            const shouldBeFalse = isNative(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('is', () => {
    const { is } = Array

    test('`is` returns `true` for arrays values', ({ array }) => {
        const shouldBeTrue = is(array)

        expect(shouldBeTrue).toBe(true)
    })

    test('`is` returns `false` for non-arrays values', ({ array, without }) => {
        without(array).forEach(value => {
            const shouldBeFalse = is(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('wrap', () => {
    const { wrap } = Array

    test('`wrap` returns value for array values', ({ array }) => {
        const shouldBeArray = wrap(array)

        expect(shouldBeArray).toBe(array)
    })

    test('`wrap` returns array with value inside for non-array values', ({
        string,
    }) => {
        const shouldBeArray = wrap(string)

        expect(shouldBeArray).toEqual([string])
    })
})

test('`append` returns an array with appended values', ({
    string,
    integer,
}) => {
    const { append } = Array

    const shouldBeAppended = append(string, integer)

    expect(shouldBeAppended).toEqual([string, integer])
})

test('`prepend` returns an array with prepended values', ({
    string,
    integer,
}) => {
    const { prepend } = Array

    const shouldBePrepended = prepend(string, integer)

    expect(shouldBePrepended).toEqual([integer, string])
})

test('`flat` returns an array with flatten values', ({ string, integer }) => {
    const { flat } = Array

    const shouldBeFlat = flat([[[string]], [[[integer]]]])

    expect(shouldBeFlat).toEqual([string, integer])
})

test('`join` returns an array with joined values', ({ string, integer }) => {
    const { join } = Array

    const shouldBeJoined = join(string, integer)

    expect(shouldBeJoined).toEqual([string, integer])
})
