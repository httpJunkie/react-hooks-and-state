require('dotenv').config()
const { user, pass } = process.env

const couchbase = require('couchbase')
const cluster = new couchbase.Cluster('couchbase://localhost', { username: user, password: pass })
const bucket = cluster.bucket('todos')
const collection = bucket.defaultCollection()

/* Lookups */
const subjects = [
  "Grandpa", "Sparky", "Uncle Johnny", "our next door neighbor", 
  "Jenny from the block", "Betty Boop", "the car", "our pet squirrel"
]
const destinations = [
  "Store", "Bank", "Courthouse", "hardware store", 
  "closest gas station", "Notary Public", "Park", 
  "Home Depot", "Burger Palace", "the demolition derby",
  "the liqour store", "to the mmon and back"
]

/* Initialize and create array of randomized todos */
const todos = []

for (i = 0; i < 15; i++) {
  todos.push({
    id: (i < 10) ? ("0" + i) : i,
    name: "Take " + subjects[Math.floor(Math.random() * subjects.length)] 
      + " to the " + destinations[Math.floor(Math.random() * destinations.length)],
    type: "todo"
  })
}

async function upsertTodos() {
  await todos.reduce(async (promise, todo) => {
    await promise
    await collection.upsert(`${todo.type}::${todo.id}`, todo)
    console.info(`document with key: ${todo.type}::${todo.id} upserted!`)
  }, Promise.resolve())
    .catch(err => console.error(err))
    .then(() => {
      console.log(`Document upsert complete!\n`)
      setTimeout(() => process.exit(22), 1000)
    })
}

upsertTodos()
  .catch(e => console.log("~ERROR: " + e))
  .then(() => console.log("~Success: "))