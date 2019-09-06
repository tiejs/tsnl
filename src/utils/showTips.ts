import chalk from 'chalk'

export function showTips(root: string, appName: string) {
  console.log()
  console.log(`Success! Created ${appName} at ${root}`)
  console.log('Inside that directory, you can run several commands:')
  console.log()
  console.log(chalk.cyan(`  npm run dev`))
  console.log('    Starts the development mode.')
  console.log()
  console.log(chalk.cyan(`  npm run build`))
  console.log('    Build for production.')
  console.log()
  console.log(chalk.cyan(`  npm test`))
  console.log('    Starts the test runner.')
  console.log()
  console.log('Happy hacking!')
}
