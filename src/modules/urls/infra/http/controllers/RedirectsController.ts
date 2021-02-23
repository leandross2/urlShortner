import { Request, Response } from 'express'
import { container } from 'tsyringe'

import FindRedirectService from '@modules/urls/services/FindRedirectService'

class RedirectsController {
  public async show(request: Request, response: Response): Promise<void> {
    const { url_short } = request.params

    const findRedirect = container.resolve(FindRedirectService)

    const redirect = await findRedirect.execute(url_short)
    return response.redirect(301, redirect)
  }
}

export default RedirectsController
