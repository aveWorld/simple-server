import express from 'express';
import getIp from 'get-ip-fanatic';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
  console.log(`client IP: "${getIp(req)}"`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
