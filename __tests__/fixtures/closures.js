import { fixture, unfixture } from '@mpietrucha/vitest/fixtures'

export const fn = fixture(() => {})

export const async = fixture(async () => {})

export const generator = fixture(function* () {})

export default [fn, async, generator].map(unfixture)
