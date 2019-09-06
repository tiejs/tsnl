export const pkg: any = {
  version: '0.0.0',
  description: '',
  main: 'dist/index.js',
  scripts: {
    dev: 'tsnl dev',
    build: 'tsnl build',
    test: 'tsnl test',
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
  devDependencies: {},
  files: ['dist/**/*.js', 'dist/**/*.d.ts'],
}
