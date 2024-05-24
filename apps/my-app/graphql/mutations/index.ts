import { mutationType, stringArg, nonNull, idArg, } from "nexus";

export const Mutation = mutationType({
    definition(t) {

        t.field('createItem', {
            type: 'Item',
            args: {
                title: nonNull(stringArg()),
                description: stringArg(),
                url: stringArg(),
                imageUrl: stringArg(),
            },
            resolve: (_, args, ctx) => {
                try {
                    return ctx.db.item.create({
                        data: {
                            title: args.title,
                            description: args.description || undefined,
                            url: args.url || undefined,
                            imageUrl: args.imageUrl || undefined,
                        }
                    })
                } catch (error) {
                    throw Error(`${error}`)
                }
            }
        }),

            t.field('updateItem', {
                type: 'Item',
                args: {
                    id: nonNull(idArg()),
                    title: stringArg(),
                    description: stringArg(),
                    url: stringArg(),
                    imageUrl: stringArg(),
                },
                resolve: (_, args, ctx) => {
                    try {
                        return ctx.db.item.update({
                            where: { id: args.id },
                            data: {
                                title: args.title || undefined,
                                description: args.description || undefined,
                                url: args.url || undefined,
                                imageUrl: args.imageUrl || undefined,
                            }
                        })
                    } catch (error) {
                        throw Error(`${error}`)
                    }
                }
            })

    }
})
