const db = require('../db');

class RolesController {
    async createPersonRole(req, res) {
        const {role, userLogin} = req.body;
        const newRole = await db.query('INSERT INTO roles (role, user_login) values ($1, $2) RETURNING *', [role, userLogin]);
        res.json(newRole.rows[0]);
    }

    async getPersonRole(req, res) {
        const login = req.params.login;
        const role = await db.query('select * from roles where user_login = $1', [login]);
        res.json(role.rows);

    }
    async updatePersonRole(req, res) {
        const {role, login} = req.body;
        const upd_role = await db.query('UPDATE role set role = $1 where user_login = $2 RETURNING *', [role, login]);
        res.json(upd_role.rows[0]);
    }
    async deletePersonRole(req, res) {
        const login = req.params.login;
        const role = await db.query('DELETE FROM role where user_login = $1', [login]);
        res.json(role.rows[0]);
    }
}

module.exports = new RolesController();