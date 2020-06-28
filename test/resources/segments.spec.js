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

describe('Segment', () => {
  it('should add contact to segment', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).post('/segments/1/contact/2/add').reply(200, {})
    const response = await client.segments.addContact(1, 2)
    expect(response.status).toBe(200)
  })

  it('should remove contact of segment', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).post('/segments/1/contact/2/remove').reply(200, {})
    const response = await client.segments.removeContact(1, 2)
    expect(response.status).toBe(200)
  })
})
