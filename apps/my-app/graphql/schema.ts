import { makeSchema, } from "nexus";
import { Mutation } from "./mutations";
import { Query } from "./queries";
import * as path from 'path'
import { DateTime, Item, SortOrder } from "./types";

export const schema = makeSchema({
    types: [Query, Mutation, DateTime, Item, SortOrder],
    outputs: {
        schema: path.join(process.cwd(), 'graphql/schema.graphql'),
        typegen: path.join(process.cwd(), 'graphql/generated/nexus.d.ts'),
    },
    contextType: {
        module: path.join(process.cwd(), 'graphql/context.ts'),
        export: 'Context'
    },
    sourceTypes: {
        modules: [
            {
                module: '@prisma/client',
                alias: 'db'
            }
        ]
    }
})