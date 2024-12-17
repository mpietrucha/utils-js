import * as Async from '@/async'
import { describe, expect, test } from '@test'

describe('tag', () => {
    test('`tag` is `[object AsyncFunction]` string', () => {
        const { tag } = Async

        expect(tag).toBe('[object AsyncFunction]')
    })

    const { isTag } = Async

    test('`isTag` returns `true` for async function values', ({ async }) => {
        const shouldBeTrue = isTag(async)

        expect(shouldBeTrue).toBe(true)
    })

    test('`isTag` returns `false` for non-async function values', ({
        async,
        without,
    }) => {
        without(async).forEach(value => {
            const shouldBeFalse = isTag(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('is', () => {
    const { is } = Async

    test('`is` returns `true` for async function values', ({ async }) => {
        const shouldBeTrue = is(async)

        expect(shouldBeTrue).toBe(true)
    })

    test('`is` returns `false` for non-async function values', ({
        async,
        without,
    }) => {
        without(async).forEach(value => {
            const shouldBeFalse = is(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})
