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

  public async findUrl(url: string): Promise<Url[]> {
    const urlFinded = this.ormRepository.find({ where: url })

    return urlFinded
  }

  public async findShortUrl(endUrl: string): Promise<Url[]> {
    const urlFinded = this.ormRepository.find({ where: { short_url: endUrl } })

    return urlFinded
  }
}

export default UrlRepository
