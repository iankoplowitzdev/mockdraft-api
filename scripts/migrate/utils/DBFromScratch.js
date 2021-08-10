#!/usr/bin/env node
'use strict';

const config = require('../../../config');
const seedDb = require('../../seed/DB');

async function createAndPopulateDB (config, seedDb){
    console.log("Seeding database...");
    const seedDBInst = new seedDb(config);
    console.log("Connecting to database...");

    await seedDBInst.connect();
    console.log("Restoring database...");

    await seedDBInst.restore();

    console.log("Getting database...");

    const DB = seedDBInst.getDb();
    seedDBInst.disconnect();
}

async function main(config, seedDb){
    await createAndPopulateDB(config, seedDb);
}

main(config, seedDb)
    .then(() => {
        process.exit();
    })
    .catch((err) => {
        console.error(err);
        process.exit();
    });