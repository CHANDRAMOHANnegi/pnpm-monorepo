import { makeSchema, objectType, enumType, asNexusMethod } from "nexus";
import { DateTimeResolver, } from 'graphql-scalars'
import * as path from 'path'

export const DateTime = asNexusMethod(DateTimeResolver, 'DateTime')

export const Item = objectType({
    name: 'Item',
    definition(t) {
        t.nonNull.id('id')
        t.nonNull.string('title')
        t.string('description')
        t.string('url')
        t.string('imageUrl')
        t.field('createdAt', { type: "DateTime" })
        t.field('updatedAt', { type: 'DateTime' })
    }
})

export const SortOrder = enumType({
    name: "SortOrder",
    members: ["asc", "desc"]
})
