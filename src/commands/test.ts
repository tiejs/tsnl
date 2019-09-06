import { Command } from '@oclif/command'
import * as jest from 'jest'

export default class Test extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ tsnl hello
hello world from ./src/hello.ts!
`,
  ]

  async run() {
    const cwd = process.cwd()
    const argv = process.argv.slice(3)

    const config = [
      ...argv,
      '--config',
      JSON.stringify({
        preset: 'ts-jest',
        testEnvironment: 'node',
        rootDir: cwd,
        collectCoverageFrom: ['src/**/*.{ts,tsx}'],
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
        testPathIgnorePatterns: ['/node_modules/', '/dist/'],
      }),
    ]

    jest.run(config)
  }
}
