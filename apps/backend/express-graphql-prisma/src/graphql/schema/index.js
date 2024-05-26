import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlModels } from "../models/index";
import { resolvers } from "../resolvers/index";

// Graphql schema
export const schema = makeExecutableSchema({
    resolvers,
    typeDefs: graphqlModels,
});