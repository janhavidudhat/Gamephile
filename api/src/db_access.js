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

async function successfullyLoginUser(email, password) {
    console.log("Got this request to login user:");
    console.log(email);
    const user = await prisma.user.findUnique({
        where: {
            email : email,
            password : password,
        }
    });

    if (user) return true;

    return false;
    //   const users = await prisma.user.findMany()
}

module.exports = registerUser, successfullyLoginUser;