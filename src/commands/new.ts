import { Command } from '@oclif/command'
import chalk from 'chalk'
import path from 'path'
import fs from 'fs-extra'
import { createPkg } from '../utils/createPkg'
import { install } from '../utils/install'
import { showTips } from '../utils/showTips'

const { green, yellow } = chalk

export default class New extends Command {
  static description = 'Init a new library project'

  static examples = [`$ tsnl new mylib`]

  static args = [{ name: 'libName' }]

  async run() {
    const templateDir = path.join(__dirname, '..', '..', 'template')

    const { args } = this.parse(New)
    const { libName } = args
    if (!libName) {
      return this.log(yellow('required project name, eg: '), green('tsnl new myapp'))
    }
    const projectPath = path.resolve(libName)

    await fs.copy(templateDir, projectPath, {
      overwrite: true,
    })
    await createPkg(libName, projectPath)
    await install(projectPath)

    showTips(projectPath, libName)
  }
}
