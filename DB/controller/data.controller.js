const db = require('../db');

class DataController {
    async createData(req, res) {
        const {content, userLogin} = req.body;
        const newData = await db.query('INSERT INTO data (content, user_login) values ($1, $2) RETURNING *', [content, userLogin]);
        res.json(newData.rows[0]);
    }

    async getDataByUser(req, res) {
        const login = req.params.login;
        const data = await db.query('select * from data where user_login = $1', [login]);
        res.json(data.rows);

    }
    async updatePersonData(req, res) {
        const {content, login} = req.body;
        const person = await db.query('UPDATE data set content = $1 where user_login = $2 RETURNING *', [content, login]);
        res.json(person.rows[0]);
    }
    async deletePersonData(req, res) {
        const login = req.params.login;
        const person = await db.query('DELETE FROM data where user_login = $1', [login]);
        res.json(person.rows[0]);
    }
}

module.exports = new DataController();