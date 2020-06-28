const Basic = require('./basic')

class Company extends Basic {
  constructor (client) {
    super(client, 'companies')
  }

  addContact (companyId, contactId) {
    return this.client.post(`companies/${companyId}/contact/${contactId}/add`)
  }

  removeContact (companyId, contactId) {
    return this.client.post(`companies/${companyId}/contact/${contactId}/remove`)
  }
}

module.exports = Company
