import { Router, Request, Response } from 'express'

import RedirectsController from '../controllers/RedirectsController'

const redirectRouter = Router()

const redirectsController = new RedirectsController()

redirectRouter.get('/:url_short', redirectsController.show)



export default redirectRouter
