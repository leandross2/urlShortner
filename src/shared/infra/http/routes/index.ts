import { Router, Request, Response } from 'express'
import urlRoutes from '@modules/urls/infra/http/routes/url.routes'

const routes = Router()

routes.use(urlRoutes)

routes.get('/', (resquest: Request, response: Response) => {

  return response.json({ sucesso: true })
})

export default routes
