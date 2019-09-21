import { Command } from '@oclif/command'
import { join } from 'path'
import spawn from 'cross-spawn'
import { removeSync } from 'fs-extra'
import { getCommand } from '../utils/getCommand'

export default class Dev extends Command {
  static description = 'Lint code with eslint'

  static examples = [`$ tsnl dev`]

  async run() {
    const cwd = process.cwd()
    const command = getCommand()
    const tsconfigPath = join(cwd, 'tsconfig.json')
    const startArgs: string[] = ['--project', tsconfigPath, '--watch']

    removeSync(join(cwd, 'dist'))

    const child = spawn(command, startArgs, { stdio: 'inherit' })

    child.on('close', code => {
      if (code !== 0) {
        console.log('Error~')
      }
    })
  }
}
