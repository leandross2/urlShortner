import ICreateUrl from '@modules/urls/DTOs/ICreateUrl'
import Url from '@modules/urls/infra/typeorm/entities/Url'


export default interface IUrlRepository {
  create(urlData: ICreateUrl): Promise<Url>
  findUrl(url: string): Promise<Url | undefined>
}
