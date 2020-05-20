import { Command } from '@oclif/command'
import { join } from 'path'
import spawn from 'cross-spawn'
import fs from 'fs-extra'

import { getCommand } from '../utils/getCommand'

export default class Dev extends Command {
  static description = 'Lint code with eslint'

  static examples = [`$ tsnl dev`]

  async run() {
    const cwd = process.cwd()
    const command = getCommand()
    const tsconfigPath = join(cwd, 'tsconfig.json')
    const startArgs: string[] = ['--project', tsconfigPath, '--watch']

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
