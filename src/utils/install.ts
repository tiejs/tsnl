import * as spawn from 'cross-spawn'
import * as path from 'path'

const deps = ['typescript@v3.4.5']

export function install(projectPath: string) {
  const command = 'npm'
  process.chdir(projectPath)
  const args: string[] = ['i', '-D']

  const child = spawn(command, [...args, ...deps], { stdio: 'inherit' })

  return new Promise((resolve, reject) => {
    child.on('close', code => {
      if (code !== 0) {
        // TODO: handle ERROR
        reject({
          command: `${command} ${args.join(' ')}`,
        })
        return
      }

      process.chdir(path.resolve(projectPath, '..'))
      resolve()
    })
  })
}
