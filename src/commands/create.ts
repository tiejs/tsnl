import { Command } from '@oclif/command'
import chalk from 'chalk'
import * as path from 'path'
import * as fs from 'fs-extra'
import { createPkg } from '../utils/createPkg'
import { install } from '../utils/install'
import { showTips } from '../utils/showTips'

const { green, yellow } = chalk

export default class Create extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ tsnl hello
hello world from ./src/hello.ts!
`,
  ]

  static args = [{ name: 'libName' }]

  async run() {
    const templateDir = path.join(__dirname, '..', '..', 'template')

    const { args } = this.parse(Create)
    const { libName } = args
    if (!libName) {
      return this.log(
        yellow('required project name, eg: '),
        green('create-leaf-app myapp'),
      )
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
