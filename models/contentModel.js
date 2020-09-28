const db = require("./conn");

class PostsModel {
    constructor(id, user_id, title, description, language, type, filename) {
        this.id = id;
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.language = language;
        this.type = type;
        this.filename = filename;
    }

    static async getAllPosts() {
        try {
            const response = await db.any(`SELECT * FROM users INNER JOIN posts ON users.id = posts.user_id ORDER BY posts.id DESC;`);
            //console.log(response);
            return response;
        } catch (error) {
            return error.message;
        }
    }



    static async postData(user_id, title, description, language, type, filename) {
        try {
            const response = await db.one(`INSERT INTO posts (user_id, title, description, language, type, filename) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`, [user_id, title, description, language, type, filename]);
            console.log("Post was created with ID:", response.id);
            return response;
        } catch(error) {
            console.error("ERROR: ", error.message);
            return error.message;
        }
    }

    static async getDynPost(user_id) {
        try {
            const response = await db.any(`SELECT * FROM posts INNER JOIN users ON users.id = posts.user_id WHERE user_id = ${user_id}`)
            console.log("Dynamic Posts: ", response);
            return response;
        } catch(error) {
            console.error("DYNAMIC ERROR: ", error.message);
            return error.message;
        }
    }

    static async getDynLang() {
        try {
            const response = await db.any(`SELECT * FROM posts LEFT JOIN users ON posts.user_id = users.id WHERE language = 1;`)
            return response;

        } catch(error) {
            console.error("DYN LANG ERROR: ", error.message);
            return error.message;
        }
    }

}



module.exports = PostsModel;

