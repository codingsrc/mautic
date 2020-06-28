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

describe('Company', () => {
  it('should get company by id', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).get('/companies/1').reply(200, {})
    const response = await client.companies.get(1)
    expect(response.status).toBe(200)
  })

  it('should list companies', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).get('/companies').reply(200, {})
    const response = await client.companies.list()
    expect(response.status).toBe(200)
  })

  it('should create a new company', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).post('/companies/new').reply(201, {})
    const response = await client.companies.create({
      companyname: 'test',
      companyemail: 'test@company.com',
      companycity: 'Raleigh',
      overwriteWithBlank: true
    })
    expect(response.status).toBe(201)
  })

  it('should edit or create a company', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).put('/companies/2/edit').reply(200, {})
    const response = await client.companies.editOrCreate(2, {
      companyname: 'test',
      companyemail: 'test@company.com',
      companycity: 'Raleigh',
      overwriteWithBlank: true
    })
    expect(response.status).toBe(200)
  })

  it('should edit given company', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).patch('/companies/2/edit').reply(200, {})
    const response = await client.companies.edit(2, {
      companyname: 'test',
      companyemail: 'test@company.com',
      companycity: 'Raleigh',
      overwriteWithBlank: true
    })
    expect(response.status).toBe(200)
  })

  it('should delete given company', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).delete('/companies/3/delete').reply(200, {})
    const response = await client.companies.delete(3)
    expect(response.status).toBe(200)
  })

  it('should add contact to company', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).post('/companies/1/contact/2/add').reply(200, {})
    const response = await client.companies.addContact(1, 2)
    expect(response.status).toBe(200)
  })

  it('should remove contact of company', async () => {
    nock(process.env.MAUTIC_API_ENDPOINT).post('/companies/1/contact/2/remove').reply(200, {})
    const response = await client.companies.removeContact(1, 2)
    expect(response.status).toBe(200)
  })
})
