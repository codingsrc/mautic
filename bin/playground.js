const Mautic = require('./../src/index')
const client = new Mautic({
  baseUrl: 'http://mautic-instance/api',
  auth: {
    username: 'luiz',
    password: 'shhhhhhhhhhhhhh!:x'
  }
})

const print = (response) => {
  console.log(JSON.stringify(response, null, 2))
}

const run = async () => {
  console.log('')
  console.log('# Contact')
  console.log('## list contacts')
  const listContactsResponse = await client.contacts.list()
  print(listContactsResponse)
}

run()
