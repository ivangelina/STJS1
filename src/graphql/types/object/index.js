export default `

    type Object {
        _id: String!,
        objectname: String!,
        title: String!,
        area: String!,
        price: String!,
        description: String!,
        location: String!
    }

    type Query {
        object(_id: String!): Object
        objects: [Object]
    }

    type Mutation {
        addObject(objectname: String!, title: String!, area: String!, price: String!, description: String!, location: String!): Object
        editObject(_id: String!, objectname: String, title: String!, area: String!, price: String!, description: String!, location: String!): Object
        deleteObject(_id: String!): Object
    }

`;
