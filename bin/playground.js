const Mautic = require('./../src/index')
const client = new Mautic({
  baseUrl: process.env.MAUTIC_API_ENDPOINT,
  auth: {
    username: process.env.MAUTIC_USERNAME,
    password: process.env.MAUTIC_PASSWORD
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
