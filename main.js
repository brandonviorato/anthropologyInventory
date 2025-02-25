import { app, BrowserWindow } from 'electron';
import { spawn } from 'child_process';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// ES module workaround for CJS __dirname
const getDirname = (metaUrl) => dirname(fileURLToPath(metaUrl));
const __dirname = getDirname(import.meta.url);

let mainWindow;
let frontendServer;
let apiServer;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: { contextIsolation: true },
  });

  // start servers
  startApiServer();
  startFrontendServer();

  // small delay to allow for startup
  setTimeout(() => mainWindow.loadURL('http://localhost:5173'), 2000);
}

function startFrontendServer() {
  frontendServer = spawn('npm', ['run', 'dev'], {
    cwd: path.join(__dirname, '/frontend'),
    shell: true,
  });
}

function startApiServer() {
  apiServer = spawn('npm', ['run', 'dev'], {
    cwd: path.join(__dirname, '/api'),
    shell: true,
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    apiServer?.kill();
    frontendServer?.kill();
    app.quit();
  }
});