import FakeUrlRepository from '../IRepositories/fakes/FakeUrlRepository'
import CreateUrlService from '../services/CreateUrlService'

let fakeUrlRepository: FakeUrlRepository
let createUrl: CreateUrlService

describe('CreateUrlService', () => {

  beforeEach(() => {
    fakeUrlRepository = new FakeUrlRepository()
    createUrl = new CreateUrlService(fakeUrlRepository)
  })

  it('Should be able to create a new url shotner', async () => {

    const url = await createUrl.execute('google.com')

    expect(url).toHaveProperty('id')
  })
})
