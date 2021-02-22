import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateUrlService from '@modules/urls/services/CreateUrlService'

class UrlsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { newUrl } = request.body

    const createUrl = container.resolve(CreateUrlService)

    const url = await createUrl.execute(newUrl)

    return response.json(url)
  }
}

export default UrlsController
