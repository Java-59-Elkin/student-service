import express from 'express';
import studentRouter from './routes/studentRoutes.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use(studentRouter);

app.use((req, res) => {
    res.status(404).type('text/plain').send('Not Found');
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
