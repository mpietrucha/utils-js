import useFixtures from '@mpietrucha/vitest/fixtures'
import closures, { async, fn, generator } from '@test/fixtures/closures'
import numbers, { float, integer } from '@test/fixtures/numbers'
import objects, { array, object, string } from '@test/fixtures/objects'
import primitives, { booleans } from '@test/fixtures/primitives'

export const fixtures = [...objects, ...numbers, ...closures, ...primitives]

export const { without } = useFixtures({ fixtures })

export default () => ({
    fn,
    float,
    async,
    array,
    string,
    object,
    integer,
    without,
    numbers,
    closures,
    booleans,
    fixtures,
    generator,
    primitives,
})
