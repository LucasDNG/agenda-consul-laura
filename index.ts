import { prisma } from "./lib/prisma";

async function getUsers(){
    const users = await prisma.user.findMany()
    console.log(users)
}

getUsers()