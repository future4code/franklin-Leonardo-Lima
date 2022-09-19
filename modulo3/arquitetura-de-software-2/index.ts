import express from 'express';
import router from './src/routes/router';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(3000);
