import { container } from 'tsyringe'

import '@modules/urls/providers/hashProvider'
import IUrlRepository from '@modules/urls/IRepositories/IUrlRepository'
import UrlRepository from '@modules/urls/infra/typeorm/repositories/UrlRespoitory'


container.registerSingleton<IUrlRepository>(
  'UrlRepository',
  UrlRepository
)
