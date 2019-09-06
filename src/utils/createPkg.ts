import path from 'path'
import fs from 'fs-extra'
import { pkg } from '../utils/pkg'

export async function createPkg(name: string, projectPath: string) {
  pkg.name = name
  pkg.description = `description for ${name}`
  const pkgPath = path.join(projectPath, 'package.json')
  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2), {
    encoding: 'utf8',
  })
}
