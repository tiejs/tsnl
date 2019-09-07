import chalk from 'chalk'
const { green, cyan } = chalk

export function showTips(root: string, appName: string) {
  console.log()
  console.log(`Success! Created ${green(appName)} at ${green(root)}`)
  console.log('Inside that directory, you can run several commands:')
  console.log()
  console.log(cyan(`  npm run dev`))
  console.log('    Starts the development mode.')
  console.log()
  console.log(cyan(`  npm run build`))
  console.log('    Build for production.')
  console.log()
  console.log(cyan(`  npm test`))
  console.log('    Starts the test runner.')
  console.log()
  console.log('Happy hacking!')
}
