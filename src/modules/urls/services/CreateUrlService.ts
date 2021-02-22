import { inject, injectable } from 'tsyringe'

import Url from '@modules/urls/infra/typeorm/entities/Url'

import UrlRepository from '../infra/typeorm/repositories/UrlRespoitory'
import IUrlRepository from '../IRepositories/IUrlRepository'
import IHashProvider from '../providers/hashProvider/models/IHashprovider'
import AppError from '@shared/errors/AppError'

@injectable()
class CreateUrlService {

  constructor(
    @inject('UrlRepository')
    private UrlRepository: IUrlRepository,

    @inject('HashProvider')
    private HashProvider: IHashProvider
  ) { }

  public async execute(newUrl: string): Promise<Url> {

    const urlExist = await this.UrlRepository.findUrlByUrl(newUrl)

    if (urlExist) {
      return urlExist
    }

    const shortString = await this.HashProvider.generateStringRandomSize(5, 10)

    const shortStringExist = await this.UrlRepository.findUrlByShortUrl(shortString)

    if (shortStringExist) {
      throw new AppError('error when generating url, please, try again')
    }

    const newUrlCleaned = newUrl.replace(/http(s)?:\/\//, '')

    const url = await this.UrlRepository.create({ url: newUrlCleaned, url_short: shortString })

    return url
  }

}


export default CreateUrlService
