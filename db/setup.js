const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function registerUser(email, name, password) {
    console.log("Got this request to register user:");
    console.log(email);
    const newUser = await prisma.user.create({
        data: {
            email : email,
            name : name,
            password : password,
        },
    });
    //   const users = await prisma.user.findMany()
}

registerUser("example@example", "temp", "password");