const pool = require('../utils/pool');

module.exports = class Character {
    id;
    name;
    position;
    quote;
    imageUrl;
    favoriteDessert;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.position = row.position;
        this.quote = row.quote;
        this.imageUrl = row.image_url;
        this.favoriteDessert = row.favorite_dessert;
    }

    static async insert(characters) {
        const { rows } = await pool.query(
           `INSERT into characters (
               name, position, quote, image_url, favorite_dessert)
               VALUES ($1, $2, $3, $4, $5)
               RETURNING *`,
               [characters.name, characters.position, characters.quote, characters.imageUrl, characters.favoriteDessert]
        );
        return new Character(rows[0]);
    }

    static async find() {
        const { rows } = await pool.query(
            `SELECT * FROM characters`
        );
        return rows.map(row => new Character(row));
    }

    static async findById(id) {
        const { rows } = await pool.query(
          'SELECT * FROM characters WHERE id=$1',
          [id]
        );
      
        if(!rows[0]) return null;
        else return new Character(rows[0]);
      }

      static async update(id, character) {
        const { rows } = await pool.query(
          `UPDATE characters
             SET name=$1,
                 position=$2,
                 quote=$3,
                 image_url=$4,
                 favorite_dessert=$5
             WHERE id=$6
             RETURNING *
            `,
          [character.name, character.position, character.quote, character.imageUrl, character.favoriteDessert, id]
        );
      
        return new Character(rows[0]);
      }

      static async delete(id) {
        const { rows } = await pool.query(
          'DELETE FROM characters WHERE id=$1 RETURNING *',
          [id]
        );
      
        return new Character(rows[0]);
      }
};