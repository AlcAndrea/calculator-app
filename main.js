const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 410, // Slightly wider to ensure the 5px border isn't clipped
    height: 560, // Slightly taller for the same reason
    frame: false, // Removes the default OS title bar
    transparent: true, // Required for rounded corners and border visibility
    resizable: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');

  // IPC listeners for the custom title bar buttons
  ipcMain.on('minimize-window', () => win.minimize());
  ipcMain.on('maximize-window', () => {
    if (win.isMaximized()) win.unmaximize();
    else win.maximize();
  });
  ipcMain.on('close-window', () => win.close());
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
