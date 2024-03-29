import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import router from './src/routes/router';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(3000);

export default app;
