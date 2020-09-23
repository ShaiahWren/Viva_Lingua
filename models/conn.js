<<<<<<< HEAD
const host = "";
const database = "";
const user = "";
const password = "";
=======
const host = "lallah.db.elephantsql.com";
const database = "mjtbpnuu";
const user = "mjtbpnuu";
const password = "GO07rWJRu8wA7A58LVRZFx4Bgn5sXflo";
>>>>>>> 1d1b20ceb3c3d30547d00b4849ddfacb6fdc6918



const pgp = require('pg-promise') ({
    query: function (event) {
        console.log("QUERY:", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);
module.exports = db;


