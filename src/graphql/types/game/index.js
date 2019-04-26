export default `

    input GameInput {
        _id: String!,
        name: String!,
        description: String,
        image: String!
    }

    type Game {
        _id: String!,
        name: String!,
        description: String,
        image: String!
    }

    type Query {
        game(_id: String!): Game
        games: [Game]
    }

    type Mutation {
        addGame(name: String!, description: String, image: String!): Game
        editGame(_id: String!, name: String, description: String, image: String): Game
        deleteGame(_id: String!): Game
    }

`;