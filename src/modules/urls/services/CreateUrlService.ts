import Crypto from 'crypto'
import { inject, injectable } from 'tsyringe'

import Url from '@modules/urls/infra/typeorm/entities/Url'

import UrlRepository from '../infra/typeorm/repositories/UrlRespoitory'
import IUrlRepository from '../IRepositories/IUrlRepository'

@injectable()
class CreateUrlService {

  constructor(
    @inject('UrlRepository')
    private UrlRepository: IUrlRepository
  ) { }

  public async execute(newUrl: string): Promise<Url> {
    // const urlExist = await this.UrlRepository.findUrl(newUrl)

    const shortString = Crypto.randomBytes(6).toString('hex').slice(0, 6)

    const url = await this.UrlRepository.create({ url: newUrl, url_short: shortString })

    return url
  }

}


export default CreateUrlService
