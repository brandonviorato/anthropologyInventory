import { app, BrowserWindow } from 'electron';
import { spawn } from 'child_process';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import kill from 'tree-kill';

// ES module workaround for CJS __dirname
const getDirname = (metaUrl) => dirname(fileURLToPath(metaUrl));
const __dirname = getDirname(import.meta.url);

console.log(__dirname);

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
  setTimeout(() => mainWindow.loadURL('http://localhost:3000'), 2000);
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

app.on('quit', () => {
  kill(frontendServer.pid);
  kill(apiServer.pid);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});