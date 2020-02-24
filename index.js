#!/usr/bin/env node
var bat = require.resolve("./clean.bat")
var { spawnSync } = require("child_process")
var { exit } = require("process")

if (process.platform == "win32") {

  console.log(`Thie tool will close system explorer.exe before clean icon & thumb cache
  After that, explorer will be restarted. :)`)

  spawnSync(bat, { timeout: 3000 })

  console.log("Enjoy correct icon & thumb on windows now")

}
