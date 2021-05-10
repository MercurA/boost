import express from 'express';

export default function () {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.get('/', (req, res, next) => {
        res.send('OK');
    })


    return {
        start() {
            app.listen(3000, () => console.log('Server is up!'))
        }
    }
}