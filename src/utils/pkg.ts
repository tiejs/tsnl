export const pkg: any = {
  name: 'projectName',
  version: '0.0.0',
  description: '',
  main: 'dist/index.js',
  scripts: {
    dev: 'tsnl dev',
    build: 'tsnl build',
    test: 'tsnl test',
    lint: 'tsnl lint',
    'lint:fix': 'tsnt lint --fix',
  },
  eslintConfig: {
    extends: 'leaf-app',
  },
  prettier: {
    semi: false,
    tabWidth: 2,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
  },
  files: ['dist'],
}
