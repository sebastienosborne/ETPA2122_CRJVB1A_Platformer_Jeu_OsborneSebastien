const { app, BrowserWindow } = require('electron')
 
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setMenuBarVisibility(false);
    win.loadFile('index.html');
}
 
app.whenReady().then(createWindow)