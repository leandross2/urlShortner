import { Router, Request, Response } from 'express'
import urlRoutes from '@modules/urls/infra/http/routes/url.routes'
import redirectRoutes from '@modules/urls/infra/http/routes/redirect.routes'

const routes = Router()

routes.use(redirectRoutes)
routes.use(urlRoutes)

routes.get('/', (resquest: Request, response: Response) => {

  return response.json({ sucesso: true })
})

export default routes
