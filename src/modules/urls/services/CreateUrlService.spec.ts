import FakeUrlRepository from '../IRepositories/fakes/FakeUrlRepository'
import CreateUrlService from '../services/CreateUrlService'
import HashProvider from '../providers/hashProvider/implementation/CryptoHashProvider'

let fakeUrlRepository: FakeUrlRepository
let createUrl: CreateUrlService
let hashProvider: HashProvider

describe('CreateUrlService', () => {

  beforeEach(() => {
    fakeUrlRepository = new FakeUrlRepository()
    createUrl = new CreateUrlService(fakeUrlRepository, hashProvider)
  })

  it('Should be able to create a new url shotner', async () => {

    const url = await createUrl.execute('google.com')

    expect(url).toHaveProperty('id')
  })
})
