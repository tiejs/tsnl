import { Command } from '@oclif/command'
import { join } from 'path'
import spawn from 'cross-spawn'
import { removeSync } from 'fs-extra'
import { getCommand } from '../utils/getCommand'

export default class Build extends Command {
  static description = 'Build the project to dist for production'

  static examples = [`$ tsnl build`]

  async run() {
    const cwd = process.cwd()
    const command = getCommand()
    const tsconfigPath = join(cwd, 'tsconfig.json')
    const startArgs: string[] = ['--project', tsconfigPath]

    removeSync(join(cwd, 'dist'))

    const child = spawn(command, startArgs, { stdio: 'inherit' })

    child.on('close', code => {
      if (code !== 0) {
        console.log('Error~')
      }
    })
  }
}
