// graphql models
export const graphqlModels = `
    type Post{
        id: ID
        text: String
        user: User
        userId: String
    }
    type User{
        id: ID
        name: String
        posts: [Post]
    }
    type Query{
      getPosts: [Post]  
      getUsers: [User]  
    }
`;