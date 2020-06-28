const Basic = require('./basic')

class Tags extends Basic {
  constructor (client) {
    super(client, 'tags')
  }
}

module.exports = Tags
