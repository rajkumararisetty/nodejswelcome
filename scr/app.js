import express from 'express';
import bodyParser from 'body-parser';
import welcomeRoutes from '../scr/routes/welcomeRoutes';
import indexRoutes from '../scr/routes';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', indexRoutes);
app.use('/welcome', welcomeRoutes);

export default app;
