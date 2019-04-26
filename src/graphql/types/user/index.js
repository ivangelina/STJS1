export default `

    type User {
        _id: String!,
        username: String!,
        email: String!,
        password: String!,
        games: [Game]
    }

    type Query {
        user(_id: String!): User
        users: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, games: [GameInput]): User
        editUser(_id: String!, username: String, email: String, password: String, games: [GameInput]): User
        deleteUser(_id: String!): User
    }

`;