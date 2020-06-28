const Basic = require('./basic')

class Segment extends Basic {
  constructor (client) {
    super(client, 'segments')
  }

  addContact (segmentId, contactId) {
    return this.client.post(`segments/${segmentId}/contact/${contactId}/add`)
  }

  removeContact (segmentId, contactId) {
    return this.client.post(
      `segments/${segmentId}/contact/${contactId}/remove`
    )
  }
}

module.exports = Segment
