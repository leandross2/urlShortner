import { inject, injectable } from 'tsyringe'

import Url from '@modules/urls/infra/typeorm/entities/Url'

import UrlRepository from '../infra/typeorm/repositories/UrlRespoitory'
import IUrlRepository from '../IRepositories/IUrlRepository'
import IHashProvider from '../providers/hashProvider/models/IHashprovider'

@injectable()
class CreateUrlService {

  constructor(
    @inject('UrlRepository')
    private UrlRepository: IUrlRepository,

    @inject('HashProvider')
    private HashProvider: IHashProvider
  ) { }

  public async execute(newUrl: string): Promise<Url> {
    // const urlExist = await this.UrlRepository.findUrl(newUrl)

    const shortString = await this.HashProvider.generateStringRandomSize(5, 10)

    const url = await this.UrlRepository.create({ url: newUrl, url_short: shortString })

    return url
  }

}


export default CreateUrlService
