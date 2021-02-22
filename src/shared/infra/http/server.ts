import 'reflect-metadata'
import 'express-async-errors';
import 'dotenv/config';

import '@shared/infra/typeorm'
import '@shared/container'

import express, { Request, Response, NextFunction } from 'express'

import AppError from '../../errors/AppError'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)


app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const port = process.env.PORT || process.env.APP_PORT || 3001

app.listen(port, () => {
  console.log(`rodando na ${port}`)
})

