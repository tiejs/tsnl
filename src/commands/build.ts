import { Command } from '@oclif/command'
import { join } from 'path'
import spawn from 'cross-spawn'
import { getCommand } from '../utils/getCommand'

export default class Build extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ tsnl hello
hello world from ./src/hello.ts!
`,
  ]

  async run() {
    const cwd = process.cwd()
    const command = getCommand()
    const tsconfigPath = join(cwd, 'tsconfig.json')
    const startArgs: string[] = ['--project', tsconfigPath]
    const child = spawn(command, startArgs, { stdio: 'inherit' })

    child.on('close', code => {
      if (code !== 0) {
        // TODO: handle ERROR
        console.log('Error~')
      }
    })
  }
}
