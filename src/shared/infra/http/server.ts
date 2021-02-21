import 'reflect-metadata'
import 'dotenv/config';

import '@shared/infra/typeorm'
import '@shared/container'

import express from 'express'

import routes from './routes'

const app = express()

app.use(routes)

app.listen(process.env.APP_PORT, () => {
  console.log(`rodando na ${process.env.APP_PORT}`)
})

