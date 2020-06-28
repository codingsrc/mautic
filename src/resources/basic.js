class Basic {
  constructor (client, endpoint) {
    this.client = client
    this.endpoint = endpoint
  }

  get (id) {
    return this.client.get(`${this.endpoint}/${id}`)
  }

  list (params = {}) {
    return this.client.get(`${this.endpoint}`, params)
  }

  create (data) {
    return this.client.post(`${this.endpoint}/new`, data)
  }

  edit (id, data) {
    return this.client.patch(`${this.endpoint}/${id}/edit`, data)
  }

  editOrCreate (id, data) {
    return this.client.put(`${this.endpoint}/${id}/edit`, data)
  }

  delete (id) {
    return this.client.delete(`${this.endpoint}/${id}/delete`)
  }
}

module.exports = Basic
