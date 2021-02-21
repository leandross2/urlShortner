import { Router, Request, Response } from 'express'

import UrlsController from '../controllers/UrlsController'

const urlRoutes = Router()

const urlsController = new UrlsController()

urlRoutes.post('/new', urlsController.create)

export default urlRoutes
