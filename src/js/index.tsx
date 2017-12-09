/// <reference path="./index.d.ts" />

// import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer} from 'react-hot-loader'
import App from './components/App'

const http = window.nodeRequire('http')

window.localStorage.debug = '*'

declare global {
  interface NodeModule {
    hot: any;
  }
  interface Window {
    nodeRequire: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __adobe_cep__: any;
  }
}

function evalJsx(code: string): Promise<string> {
  return new Promise(resolve => {
    window.__adobe_cep__.evalScript(code, (result: string) => resolve(result))
  })
}

function getAppEl() {
  let appEl = document.getElementById('app')
  if (!appEl) {
    appEl = document.createElement('div')
    appEl.id = 'app'
    appEl.style.width = '100%'
    appEl.style.height = '100%'
    appEl.style.backgroundColor = '#ffffff'
    document.body.appendChild(appEl)
  }
  return appEl
}

const server = http.createServer((req, res) => {
  const { method, url } = req
  let body: string = ''
  req.on('data', (chunk) => {
    body += chunk.toString()
  })
  .on('end', () => {   
    try {
      const parsedBody = JSON.parse(body)
      console.log(parsedBody)
      if (parsedBody.jsx) {
        evalJsx(parsedBody.jsx)
          .then((jsxRes) => {
            res.writeHead(200, {
              'Content-Type': 'application/json'
            })
            res.end(JSON.stringify({
              result: jsxRes
            }))
          })
      }
    } catch (err) {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      })
      res.end()
    }
  })
})
server.listen(8080)

if (module && module.hot) {
  module.hot.onUpdate(() => {
    server.close()
  })
}

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  getAppEl()
)
