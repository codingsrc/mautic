class Contact {
  constructor (client) {
    this.client = client
  }

  get (contactId) {
    return this.client.get(`contacts/${contactId}`)
  }

  list (params = {}) {
    return this.client.get('contacts', params)
  }

  create (contact) {
    delete contact.id
    return this.client.post('contacts/new', contact)
  }

  edit (contactId, contact) {
    return this.client.patch(`contacts/${contactId}/edit`, contact)
  }

  editOrCreate (contactId, contact) {
    return this.client.put(`contacts/${contactId}/edit`, contact)
  }

  delete (contactId) {
    return this.client.delete(`contacts/${contactId}/delete`)
  }

  addPoints (contactId, points, data = { eventname: undefined, eventaction: undefined }) {
    return this.client.post(`contacts/${contactId}/points/plus/${points}`, data)
  }

  subtractPoints (contactId, points, data = { eventname: undefined, eventaction: undefined }) {
    return this.client.post(`contacts/${contactId}/points/minus/${points}`, data)
  }

  getNotes (contactId) {
    return this.client.get(`contacts/${contactId}/notes`)
  }

  getActivityEvents (contactId, params = {}) {
    return this.client.get(`contacts/${contactId}/activity`, params)
  }

  getCompanies (contactId) {
    return this.client.get(`contacts/${contactId}/companies`)
  }

  addUTMTags (contactId, data) {
    return this.client.post(`contacts/${contactId}/utm/add`, data)
  }

  removeUTMTags (contactId, utmId) {
    return this.client.post(`contacts/${contactId}/utm/${utmId}/remove`)
  }

  listSegments (contactId) {
    return this.client.get(`contacts/${contactId}/segments`)
  }

  addDoNotContact (contactId, data, channel = 'email') {
    return this.client.post(`contacts/${contactId}/dnc/${channel}/add`, data)
  }

  removeDoNotContact (contactId, data, channel = 'email') {
    return this.client.post(`contacts/${contactId}/dnc/${channel}/remove`, data)
  }
}

module.exports = Contact
