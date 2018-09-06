import App from './App'
import React from 'react'
import { StaticRouter, matchPath } from 'react-router-dom'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { renderStylesToString } from 'emotion-server'

import routes from './routes'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {}

    const matches = routes.map((route, index) => {
      const match = matchPath(req.url, route.path, route)
      if (match) {
        const obj = {
          route,
          match,
          promise: route.component.getInitialData ? route.component.getInitialData({ match, req, res }) : Promise.resolve(null)
        }
        return obj
      }

      return null
    })
    if (matches.length === 0) {
      res.status(404).send('Not found')
    }

    const promises = matches.map(match => (match ? match.promise : null))

    const renderMarkup = (initialData, initialDataError = []) => {
      if (!initialData) {
        initialData = []
      }
      const markup = renderToString(
        <StaticRouter context={context} location={req.url}>
          <App routes={routes} initialData={initialData} initialDataError={initialDataError} />
        </StaticRouter>
      )
      const htmlWithStyles = renderStylesToString(markup)

      if (context.url) {
        return res.redirect(context.url)
      } else {
        return (
          `<!doctype html>
      <html lang="">
      <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />
          <link rel="manifest" href="/manifest.json">
          <link rel="shortcut icon" href="/favicon.png">
          <link href="https://unpkg.com/ionicons@4.0.0/dist/css/ionicons.min.css"rel="stylesheet"/>
          <title>Bitcharge</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
          ${process.env.NODE_ENV === 'production' ? `<script src="${assets.client.js}" defer></script>` : `<script src="${assets.client.js}" defer crossorigin></script>`}
      </head>
      <body>
          <div id="root">${htmlWithStyles}</div>
          <script>window._INITIAL_DATA_ = ${JSON.stringify(initialData)};</script>
          <script>window._INITIAL_DATA_ERROR_ = ${JSON.stringify(initialDataError)};</script>
      </body>
    </html>`
        )
      }
    }

    Promise.all(promises)
      .then(data => {
        const markup = renderMarkup(data)
        return res.status(200).send(markup)
      })
      .catch(error => {
        console.log(error)
        const markup = renderMarkup(null, true)
        return res.status(200).send(markup)
      })
  })

export default server
