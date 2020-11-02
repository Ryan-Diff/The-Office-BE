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
};