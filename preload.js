// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    clearCache: () => {
        const { session } = require('electron').remote;
        session.defaultSession.clearCache().then(() => {
            console.log('Cache cleared');
        });
    }
});
