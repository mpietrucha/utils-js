import * as Generator from '@/generator'
import { describe, expect, test } from '@test'

describe('tag', () => {
    test('`tag` is `[object GeneratorFunction]` string', () => {
        const { tag } = Generator

        expect(tag).toBe('[object GeneratorFunction]')
    })

    const { isTag } = Generator

    test('`isTag` returns `true` for generator function values', ({
        generator,
    }) => {
        const shouldBeTrue = isTag(generator)

        expect(shouldBeTrue).toBe(true)
    })

    test('`isTag` returns `false` for non-generator function values', ({
        generator,
        without,
    }) => {
        without(generator).forEach(value => {
            const shouldBeFalse = isTag(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})

describe('is', () => {
    const { is } = Generator

    test('`is` returns `true` for generator function values', ({
        generator,
    }) => {
        const shouldBeTrue = is(generator)

        expect(shouldBeTrue).toBe(true)
    })

    test('`is` returns `false` for non-generator function values', ({
        generator,
        without,
    }) => {
        without(generator).forEach(value => {
            const shouldBeFalse = is(value)

            expect(shouldBeFalse).toBe(false)
        })
    })
})
