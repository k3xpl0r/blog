/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    tabWidth: 4,
    singleQuote: true,
    bracketSameLine: true,
    bracketSpacing: true,
    jsxSingleQuote: true,
    trailingComma: 'all',
    useTabs: false,
    semi: true,
    quoteProps: 'as-needed',
    arrowParens: 'avoid',
    proseWrap: 'always',
    endOfLine: 'lf',
};
