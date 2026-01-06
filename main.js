const { app, BrowserWindow, ipcMain  } = require("electron");
const path = require("path");

let win;

const createWindow = () => {
  win = new BrowserWindow({
    frame: false,
    width: 800,
    height: 600,

    maxHeight: 600,
    maxWidth: 800,

    minHeight: 600,
    minWidth: 800,
    icon: path.join(__dirname, 'Assets/meowmeow.ico'),
    webPreferences: {
      preload: require.resolve('./preload.js')
    }

    
  });

  ipcMain.on("window:minimize", () => {
    win.minimize();
  });

  ipcMain.on("window:close", () => {
    win.close();
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});