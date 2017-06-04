const electron = require('electron')
const APP_VERSION = require('../package.json').version

const AUTO_UPDATE_URL = 'https://bcoin.lola.ninja/update/' + process.platform + '/' + APP_VERSION

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
    (err) => {
      console.error(`Update error: ${err.message}`)
      electron.dialog.showMessageBox({
        type: 'info',
        buttons: ['OK'],
        title: "Update Error",
        message: err.message
      }, null)
    }
  )

  electron.autoUpdater.on(
    'checking-for-update',
    () => {
      console.log('Checking for update')
      electron.dialog.showMessageBox({
        type: 'info',
        buttons: ['OK'],
        title: "Checking Updates",
        message: "We are looking for updates"
      }, null)
    }
  )

  electron.autoUpdater.on(
    'update-available',
    () => {
      console.log('Update available')
      electron.dialog.showMessageBox({
        type: 'info',
        buttons: ['OK'],
        title: "Update Available",
        message: "Update available"
      }, null)
    }
  )

  electron.autoUpdater.on(
    'update-not-available',
    () => {
      console.log('No update available')
      electron.dialog.showMessageBox({
        type: 'info',
        buttons: ['OK'],
        title: "No Update Available",
        message: "No update available"
      }, null)
    }
  )

  electron.autoUpdater.on(
    'update-downloaded',
    (e, notes, name, date, url) => {
      console.log(`Update downloaded: ${name}: ${url}`)
      electron.dialog.showMessageBox({
        type: 'info',
        buttons: ['OK'],
        title: "Update Downloaded",
        message: name
      }, null)
    }
  )

  electron.autoUpdater.setFeedURL(AUTO_UPDATE_URL)
  electron.autoUpdater.checkForUpdates()

}

module.exports = {
  init
}
