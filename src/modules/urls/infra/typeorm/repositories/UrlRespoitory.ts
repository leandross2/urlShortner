import { getRepository, Repository } from 'typeorm'

import Url from '../entities/Url'

import ICreateUser from '@modules/urls/DTOs/ICreateUrl'
import IUrlRepository from '@modules/urls/IRepositories/IUrlRepository'

class UrlRepository implements IUrlRepository {
  private ormRepository: Repository<Url>

  constructor() {
    this.ormRepository = getRepository(Url)
  }

  public async create(urlData: ICreateUser): Promise<Url> {
    const url = this.ormRepository.create(urlData)

    await this.ormRepository.save(url)

    return url
  }

  public async findUrlByShortUrl(endUrl: string): Promise<Url | undefined> {

    const urlFinded = this.ormRepository.findOne({ where: { url_short: endUrl } })

    return urlFinded
  }
  public async findUrlByUrl(url: string): Promise<Url | undefined> {

    const urlFinded = this.ormRepository.findOne({ where: { url } })

    return urlFinded
  }
}

export default UrlRepository
