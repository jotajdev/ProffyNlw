const express = require('express') 
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess } = require('./pages')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .get("/success", pageSuccess)
  .post("/save-class", saveClasses)
  .listen(5500)