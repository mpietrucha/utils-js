import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    declaration: false,
    rollup: {
        inlineDependencies: true,
        output: { exports: 'named' },
    },
    alias: {
        '~': __dirname,
        '@': resolve(__dirname, 'src'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@composables': resolve(__dirname, 'src/composables'),
    },
})
