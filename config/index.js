'use strict'

const DEFAULT_DB_NAME = "mockdraft";
const DEFAULT_DB_HOST = "mongo";
const DEFAULT_DB_PORT = 27017;

module.exports = {
    db: {
        name: process.env.hasOwnProperty('DB_NAME')
            ? process.env.DB_NAME
            : DEFAULT_DB_NAME,
        host: process.env.hasOwnProperty('DB_HOST')
            ? process.env.DB_HOST
            : DEFAULT_DB_HOST,
        port: process.env.hasOwnProperty('DB_PORT')
            ? process.env.DB_PORT
            : DEFAULT_DB_PORT,
    }
}