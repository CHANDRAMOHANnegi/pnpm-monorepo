import { queryType, stringArg, nonNull, arg, } from "nexus";

export const Query = queryType({
    definition(t) {
        t.list.field('getItems', {
            type: 'Item',
            args: {
                sortBy: arg({ type: 'SortOrder' }),
            },
            resolve: async (_, args, ctx) => {
                console.log(args);

                const items = await ctx.db.item.findMany({})

                console.log(items);

                return items
            }
        })

        t.field('getOneItem', {
            type: 'Item',
            args: {
                id: nonNull(stringArg())
            },
            resolve: async (_, args, ctx) => {
                try {
                    return ctx.db.item.findUnique({ where: { id: args.id } })
                } catch (error) {
                    throw new Error(`${error}`)
                }
            }
        })
    }
})
