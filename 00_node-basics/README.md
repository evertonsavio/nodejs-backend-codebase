### Node Basics commands

- On project folder:

```
npm init
```

- Add on Scrips on package.json file "start": "node app.js" or "start-server": "node app.js"

```
npm start
npm run start-server "My own script, needs RUN"
```

```
npm install nodemon -g # For global install
npm install nodemon --save-dev # For development dependency
npm install nodemon --save # For production
```

- change to "start": "nodemon app.js"

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${woekspaceFolder}/app.js",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "console": "integratedTerminal"
    }
  ]
}
```
