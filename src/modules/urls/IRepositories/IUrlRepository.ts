import ICreateUrl from '@modules/urls/DTOs/ICreateUrl'
import Url from '@modules/urls/infra/typeorm/entities/Url'


export default interface IUrlRepository {
  create(urlData: ICreateUrl): Promise<Url>
  findUrlByShortUrl(url: string): Promise<Url | undefined>
  findUrlByUrl(url: string): Promise<Url | undefined>
}
