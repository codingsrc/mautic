/* eslint-disable no-undef */
require('dotenv').config()
const nock = require('nock')
const Mautic = require('../../src/index')
const client = new Mautic({
  baseUrl: process.env.MAUTIC_API_ENDPOINT,
  auth: {
    username: process.env.MAUTIC_USERNAME,
    password: process.env.MAUTIC_PASSWORD
  }
})

describe('tag', () => {
  it('should get tags by id', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).get('/tags/1').reply(200, {})
    const response = await client.tags.get(1)
    expect(response.status).toBe(200)
  })

  it('should list tags', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).get('/tags').reply(200, {})
    const response = await client.tags.list()
    expect(response.status).toBe(200)
  })

  it('should create a new tag', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).post('/tags/new').reply(201, {})
    const response = await client.tags.create({
      tag: 'test'
    })
    expect(response.status).toBe(201)
  })

  it('should edit or create a tag', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).put('/tags/2/edit').reply(200, {})
    const response = await client.tags.editOrCreate(2, {
      tag: 'test2'
    })
    expect(response.status).toBe(200)
  })

  it('should edit given tag', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).patch('/tags/2/edit').reply(200, {})
    const response = await client.tags.edit(2, {
      tag: 'test2_edited'
    })
    expect(response.status).toBe(200)
  })

  it('should delete given tag', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).delete('/tags/3/delete').reply(200, {})
    const response = await client.tags.delete(3)
    expect(response.status).toBe(200)
  })
})
