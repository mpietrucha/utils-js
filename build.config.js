import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    declaration: false,
    rollup: {
        inlineDependencies: true,
        esbuild: { minify: true },
        output: { exports: 'named' },
    },
    alias: { '~': __dirname, '@': resolve(__dirname, 'src') },
})
