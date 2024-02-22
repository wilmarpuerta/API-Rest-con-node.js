const { MongoClient, ServerApiVersion } = require('mongodb');

const DB_URI = ``

const client = new MongoClient(DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Conexión exitosa!");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
