const db = require('../db');


class PersonController {
    async createPerson(req, res) {
        const {login} = req.body;
        const newPerson = await db.query('INSERT INTO person (login) values ($1) RETURNING *', [login]);
        res.json(newPerson.rows[0]);
    }
    async getPersons(req, res) {

        const persons = await db.query('SELECT * FROM person');
        res.json(persons.rows);
    }
    async getOnePerson(req, res) {
        const login = req.params.login;
        const person = await db.query('SELECT * FROM person where login = $1', [login]);
        res.json(person.rows[0]);
    }
    async updatePerson(req, res) {
        const {id, login} = req.body;
        const person = await db.query('UPDATE person set login = $1 where id = $2 RETURNING *', [login, id]);
        res.json(person.rows[0]);
    }
    async deletePerson(req, res) {
        const login = req.params.login;
        const person = await db.query('DELETE FROM person where login = $1', [login]);
        res.json(person.rows[0]);
    }
}

module.exports = new PersonController();