
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3001;

function userInfo(req, res) {
  const userInfo = [
    { "userId": "1", "userName": "Neha", "userAddress": "west bengal", "userDescription": "nothing"},
    { "userId": "2", "userName": "Amar", "userAddress": "kolkata", "userDescription": "from kolkata"},
    { "userId": "3", "userName": "Amar1", "userAddress": "USA", "userDescription": "teacher"},
    { "userId": "4", "userName": "Karl", "userAddress": "UA", "userDescription": "UA"},
  ]
  res.json(userInfo);
}


app.get('/api/customuser', userInfo);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
