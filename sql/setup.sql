DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    quote TEXT NOT NULL,
    image_url TEXT,
    favorite_dessert TEXT NOT NULL
);