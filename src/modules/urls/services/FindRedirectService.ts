import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import Url from '@modules/urls/infra/typeorm/entities/Url'

import UrlRepository from '../infra/typeorm/repositories/UrlRespoitory'
import IUrlRepository from '../IRepositories/IUrlRepository'


@injectable()
class FindRedirectService {
  constructor(
    @inject('UrlRepository')
    private UrlRepository: IUrlRepository,

  ) { }

  public async execute(shortUrl: string): Promise<string> {

    const urlExist = await this.UrlRepository.findUrlByShortUrl(shortUrl)

    if (!urlExist) {
      throw new AppError('url not found', 404)
    }

    const fullUrl = `http://${urlExist.url}`
    return fullUrl
  }
}


export default FindRedirectService
