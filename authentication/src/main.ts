import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => res.send('Hello world'));

app.listen(PORT, () => console.log(`Listening at port: ${PORT}`));