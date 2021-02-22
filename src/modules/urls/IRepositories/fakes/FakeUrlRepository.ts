import { uuid } from 'uuidv4'

import IUrlRepository from '../../IRepositories/IUrlRepository'
import ICreateUrl from '../../DTOs/ICreateUrl'

import Url from '../../infra/typeorm/entities/Url'

class FakeUrlRepository implements IUrlRepository {
  private urls: Url[]

  public async create(urlData: ICreateUrl): Promise<Url> {
    const url = new Url()

    Object.assign(
      url,
      { id: uuid() },
      urlData
    )

    this.urls.push(url)

    return url
  }

  public async findUrl(url: string): Promise<Url | undefined> {
    const findUrl = this.urls.find((item) => item.url === url)

    return findUrl
  }
}


export default FakeUrlRepository
