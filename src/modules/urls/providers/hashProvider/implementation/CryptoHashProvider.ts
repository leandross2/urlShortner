import Crypto from 'crypto'

import IHashProvider from '../models/IHashprovider'

class CryptoHashProvider implements IHashProvider {
  public async generateStringRandomSize(min: number, max: number): Promise<string> {
    const randomSize = Crypto.randomInt(5, 10)

    const shortString = Crypto.randomBytes(randomSize).toString('hex').slice(0, randomSize)

    return shortString
  }
}

export default CryptoHashProvider
