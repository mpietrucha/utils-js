import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

export const alias = {
    '@': resolve('src'),
    '@composables': resolve('src/composables'),
}

export const rollup = {
    inlineDependencies: true,
    output: { exports: 'named' },
}

export const declaration = false

export default defineBuildConfig({ alias, rollup, declaration })
