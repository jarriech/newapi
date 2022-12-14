const { Character, Movie } = require("../db");

const getAllCharacters = async () => {
    try {
        let characters = (await Character.findAll({
            include: {
                model: Movie,
                attributes: ["title"],
                through: {
                    attributtes: [],
                }
            }
        })).map(e => e.toJSON())
        characters = characters?.map(character => ({
            name: character?.name,
            image: character?.image,
            movies: character?.movies?.map(t => t.title)
        }));
        return characters;
    } catch (error) {
        return error;
    };
};

module.exports = getAllCharacters;