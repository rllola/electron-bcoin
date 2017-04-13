var spawn = require('child_process').spawn

var args = ['rebuild']

if(process.versions.electron) {
    args.push('--target=' + process.versions.electron)
} else {
  throw new Error('Electron version not found')
}

args.push('--arch=' + process.arch)
args.push('--directory=./node_modules/leveldown')
args.push('--dist-url=https://atom.io/download/electron')

var child = spawn('node-gyp', args, {stdio: 'inherit', detached:false})

child.on('close', process.exit)
