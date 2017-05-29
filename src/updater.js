const electron = require('electron')
const APP_VERSION = require('../package.json').version

const AUTO_UPDATE_URL = 'https://bcoin.lola.ninja/update' +
  '?version=' + APP_VERSION +
  '&platform=' + process.platform

function init () {
  if (process.platform === 'linux') {
    console.log('Auto updates not available on linux')
  } else {
    initDarwinWin32()
  }
}

function initDarwinWin32 () {
  electron.autoUpdater.on(
    'error',
    (err) => console.error(`Update error: ${err.message}`)
  )

  electron.autoUpdater.on(
    'checking-for-update',
    () => console.log('Checking for update')
  )

  electron.autoUpdater.on(
    'update-available',
    () => console.log('Update available')
  )

  electron.autoUpdater.on(
    'update-not-available',
    () => console.log('No update available')
  )

  electron.autoUpdater.on(
    'update-downloaded',
    (e, notes, name, date, url) => console.log(`Update downloaded: ${name}: ${url}`)
  )

  electron.autoUpdater.setFeedURL(AUTO_UPDATE_URL)
  electron.autoUpdater.checkForUpdates()
}

module.exports = {
  init
}
