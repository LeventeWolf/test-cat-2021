const db = require('../config/db');

class CatDao {

    async getCats() {
        let results = await db.query(`SELECT *
                                      FROM cat`)
            .catch(console.log);
        return results.rows;
    };

    async getOneCat(id) {
        let result = await db.query('SELECT * FROM cat WHERE id = $1', [id])
            .catch(console.log);
        return result.rows[0];
    };

    async createCat(name, bunda_suruseg) {
        await db.query('INSERT INTO cat (name, bunda_suruseg) VALUES ($1, $2)', [name, bunda_suruseg])
            .catch(console.log);
        return;
    };

    async updateCat(id, name, bunda_suruseg) {
        await db.query(`UPDATE cat
                        SET name = $1,
                            bunda_suruseg = $2
                        WHERE id = $3`, [name, bunda_suruseg, parseInt(id)])
            .catch(console.log);

        return;
    };

    async deleteCat(id) {
        await db.query(`DELETE
                        FROM cat
                        WHERE id = $1`, [parseInt(id)])
            .catch(console.log);

        return;
    };

};

module.exports = CatDao;