require('dotenv').config();
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const PRIVATE_KEY = process.env.TOKEN;

const calculateToken = (email = '', id = 0) => {
    return jwt.sign({ email: email, id: id }, String(PRIVATE_KEY));
};

const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
};

const hashPassword = (plainPassword: string) => {
    return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (plainPassword: string, hashedPassword: string) => {
    return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

export = { calculateToken, hashPassword, verifyPassword };
