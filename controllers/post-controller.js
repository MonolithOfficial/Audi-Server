const knex = require('./../db');


exports.postsAll = async (req, res) => {
    knex.select('*')
    .from('posts')
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json({message: `An error occurred while retrieving the posts: ${error}`})
    })
}