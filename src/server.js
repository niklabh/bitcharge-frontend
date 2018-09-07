import App from './App'
import React from 'react'
import { StaticRouter, matchPath } from 'react-router-dom'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { renderStylesToString } from 'emotion-server'
import { Helmet } from 'react-helmet'

import routes from './routes'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {}
    const routePaths = routes.filter((route) => route.path !== '/:username').map((route) => route.path)
    const matches = routes.map((route, index) => {
      const match = matchPath(req.path, route)
      if (match) {
        const obj = {
          route,
          match,
          promise: (!routePaths.includes(req.path) && route.component.getInitialData) ? route.component.getInitialData({ match, req, res }) : Promise.resolve(null)
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
      const helmet = Helmet.renderStatic()

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
          <link href="/styles/fonts.css" rel="stylesheet" />
          <link href="/styles/app.css" rel="stylesheet" />
          <link href="https://unpkg.com/ionicons@4.0.0/dist/css/ionicons.min.css"rel="stylesheet"/>
          <title>Bitcharge</title>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
          <script src="https://cdn.ravenjs.com/3.26.4/raven.min.js" crossorigin="anonymous"></script>
          ${process.env.NODE_ENV === 'production' ? `<script src="${assets.client.js}" defer></script>` : `<script src="${assets.client.js}" defer crossorigin></script>`}
          <script>${process.env.NODE_ENV === 'production' ? `Raven.config('https://59a0c403385e46eaae317bd9064544aa@sentry.io/1274092').install()` : null}</script>
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
