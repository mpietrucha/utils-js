import useVitest from '@mpietrucha/vitest'
import useFixtures from '@test/fixtures'

export const fixtures = useFixtures()

export const { it, test, expect, describe } = useVitest({ fixtures })
