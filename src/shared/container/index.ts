import { container, delay } from 'tsyringe'

import IUrlRepository from '@modules/urls/IRepositories/IUrlRepository'
import UrlRepository from '@modules/urls/infra/typeorm/repositories/UrlRespoitory'


container.registerSingleton<IUrlRepository>(
  'UrlRepository',
  delay(() => UrlRepository)
)
