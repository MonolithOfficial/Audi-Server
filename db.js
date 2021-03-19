const path = require('path')

const dbPath = path.resolve(__dirname, 'db/database.sqlite')

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

// SQL table
knex.schema
    // Checking if there already is a table called Articles
    .hasTable('posts')
        .then(exists => {
            if (!exists) {
                return knex.schema.createTable('posts', table => {
                    // table.increments('id').primary()
                    table.string('category')
                    table.date('post_date')
                    table.string('title')
                    table.string('image')
                    table.string('description')
                })
                .then(() => {
                    console.log('Table created')
                })
                .catch(error => {
                    console.error(`An error occurred while creating the table ${error}`)
                })
            }
        })
        .then(() => {
            console.log('Done')
        })
        .catch(() => {
            console.error(`And error occurred while setting up the database: ${error}`)
        })

// Logging articles data
knex.select('*').from('posts')
.then(data => console.log('Data:', data))
.catch(error => console.log(error))

module.exports = knex