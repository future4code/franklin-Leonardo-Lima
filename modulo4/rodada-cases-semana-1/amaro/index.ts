import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import router from './src/routes/router';

const app = express();

app.use(express.json());
app.use(router);
app.listen(3000);
