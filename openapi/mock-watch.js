const chokidar = require("chokidar")
const { exec } = require('child_process')

chokidar.watch("./**/*.yaml", {ignored: /dist/})
  .on("change", () => {
    exec("yarn dist:yaml", (error, _, stderror) => {
      if (error){
        console.log(stderror)
      }
    })
  })
