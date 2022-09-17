const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//using express.json () to get data into json format
app.use(express.json());
//port
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());
<<<<<<< HEAD

=======
>>>>>>> 053cef907854b56914d9934071262d96057e7770
//import routes
const TodoItemRoute = require('./routes/Todoitems');

//connect to mongoose
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.use('/', TodoItemRoute);
// Add port and connect to server
app.listen(PORT, () => console.log('Server connected'));
