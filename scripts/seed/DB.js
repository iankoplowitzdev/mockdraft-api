require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const dbUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;
const dbPath = `${dbUrl}/${dbName}`;

const Team = require('../../models/team');
const teams = require('./teams');

const Player = require('../../models/player');
const players = require('./players');

const Position = require('../../models/position');
const positions = require('./positions');


module.exports = class DB{
    constructor(config){
        if(!config){
            throw new Error("DB requires config to be intantiated.");
        }

        this.config = config;
    }

    async connect() {
        let client = await MongoClient.connect(`mongodb://${this.config.db.host}:${this.config.db.port}/${this.config.db.name}`);
        this.db = client.db(this.config.db.name);


        mongoose.connect(dbPath, {useNewUrlParser: true});
        const connection = mongoose.connection;
        connection.on('error', console.error.bind(console, 'Error establishing connection to Mongo database!'));
        connection.once("open", function() {
            console.log("MongoDB database connection established successfully");
        });

        return this;
    }

    collection(collectionName){
        return this.db.collection(collectionName);
    }

    getDb() {
        return this.db;
    }

    async restore() {
        const systemUser = {
            username: 'systemUser'
        };
        await this.collection('users').insertOne(systemUser);

        // create teams collection
        this.db.dropCollection('teams');
        for (let i = 0; i < teams.length; i++) {
            const team = new Team(teams[i]);
            await team.save();
        }

        // create players collection
        this.db.dropCollection('players');
        for (let i = 0; i < players.length; i++) {
            const player = new Player(players[i]);
            await player.save();
        }

        // create positions collection
        this.db.dropCollection('positions');
        for (let i = 0; i < positions.length; i++) {
            const position = new Position(positions[i]);
            await position.save();
        }
    }

    async disconnect() {
        await this.db.close();

        return this;
    }
}