import { Command } from '@oclif/command'
import { CLIEngine } from 'eslint'
import { readJSON, existsSync } from 'fs-extra'
import { join } from 'path'

export default class Lint extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ tsnl hello
hello world from ./src/hello.ts!
`,
  ]

  async run() {
    const cwd = process.cwd()
    const { argv } = process
    const pkg = await readJSON(join(cwd, 'package.json'))
    const hasFix = argv.includes('--fix')

    const baseConfig = pkg.eslintConfig
      ? pkg.eslintConfig
      : {
          extends: 'leaf-app',
        }

    const config = {
      baseConfig,
      extensions: ['.ts', '.tsx'],
      fix: hasFix,
      cwd,
      ignorePattern: undefined,
    }

    const cli = new CLIEngine(config)
    const files = ['src']

    if (existsSync(join(cwd, 'tests'))) files.push('tests')
    if (existsSync(join(cwd, '__tests__'))) files.push('__tests__')

    const report = cli.executeOnFiles(files)

    if (hasFix) CLIEngine.outputFixes(report)

    console.log(cli.getFormatter()(report.results))

    if (report.errorCount) process.exit(1)
  }
}
