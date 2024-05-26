import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Graphql Resolvers
export const resolvers = {
    Query: {
        getPosts: () => {
            return prisma.post.findMany({
                include: {
                    author: true,
                },
            });
        },
        getUsers: () => {
            return prisma.user.findMany({
                include: {
                    posts: true,
                },
            });
        },
    },
};
