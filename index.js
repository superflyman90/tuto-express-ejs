import express from 'express';
import routes from './routes/routes.js';
import dotenv from 'dotenv';
dotenv.config({path: './config/.env'});

const PORT = process.env.PORT || 3000;
const app = express();


app.set('view engine', 'ejs');
// Middleware
app.use(routes);
app.use(express.static('public/assets'));

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})

