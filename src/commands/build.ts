import { Command } from '@oclif/command'
import { join } from 'path'
import spawn from 'cross-spawn'
import fs from 'fs-extra'
import { getCommand } from '../utils/getCommand'

export default class Build extends Command {
  static description = 'Build the project to dist'

  static examples = [`$ tsnl build`]

  async run() {
    const cwd = process.cwd()
    const command = getCommand()
    const tsconfigPath = join(cwd, 'tsconfig.json')
    const startArgs: string[] = ['--project', tsconfigPath]

    const distDir = join(cwd, 'dist')
    if (fs.existsSync(distDir)) fs.removeSync(distDir)

    const child = spawn(command, startArgs, { stdio: 'inherit' })

    child.on('close', code => {
      if (code !== 0) {
        console.log('Error~')
      }
    })
  }
}
