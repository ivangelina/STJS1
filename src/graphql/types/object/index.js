export default `

    type Building {
        _id: String!,
        buildingname: String!,
        title: String!,
        area: String!,
        price: String!,
        description: String!,
        location: String!
    }

    type Query {
        building(_id: String!): Building
        buildings: [Building]
    }

    type Mutation {
        addBuilding(buildingname: String!, title: String!, area: String!, price: String!, description: String!, location: String!): Building
        editBuilding(_id: String!, buildingname: String, title: String!, area: String!, price: String!, description: String!, location: String!): Building
        deleteBuilding(_id: String!): Building
    }

`;
