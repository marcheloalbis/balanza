const { app, BrowserWindow } = require('electron');
const path = require('path');

let appWindow;

function createWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true, // Habilitar integración de Node.js
    },
  });

  // Cargar el archivo index.html de tu aplicación Angular
  appWindow.loadFile(path.join(__dirname, 'dist', 'balanza', 'index.html'));

  appWindow.on('closed', function () {
    appWindow = null;
  });
}

app.whenReady().then(createWindow);
