import express from 'express';
import cors from 'cors';
import getBoredActivity from './bored_api_microservice.mjs';

/* CORS (Cross-Origin Resource Sharing) needs to be enabled, or the browser will throw a 'Request Blocked' error.*/
const app = express();
app.use(cors());

/*Establishes an endpoint for the /activity route.*/ 
app.get('/activity', async (req, res) => {
  const { type, participants, price, accessibility } = req.query;


  /*Parsing is required for parameter validation and ensuring no data anomalies.*/
  const result = await getBoredActivity(
    type,
    parseInt(participants),
    parseFloat(price),
    parseFloat(accessibility));


  /*Error Handling*/
  if (result.error) {
    res.status(400).json(result);
  } 
  else {
    res.json(result.data);
  }
});

/*Express server is hosted on http://localhost:8221*/
const PORT = 8221;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});