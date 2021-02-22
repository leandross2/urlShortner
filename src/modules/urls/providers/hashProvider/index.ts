import { container } from 'tsyringe'

import IHashProvider from './models/IHashprovider'
import CryptoHashProvider from './implementation/CryptoHashProvider'


container.registerSingleton<IHashProvider>('HashProvider', CryptoHashProvider)
