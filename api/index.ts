import "reflect-metadata";
import { createConnection } from "typeorm";
import http from './server/http';
import {User} from './db/models/User';

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "recipies_db",
    entities: [
        User
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));

http().start();