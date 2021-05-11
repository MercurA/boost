import "reflect-metadata";
import { createConnection } from "typeorm";
import http from './server/http';
import {User} from './db/models/User';
import 'dotenv/config'

createConnection({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [
        User
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));

http().start();