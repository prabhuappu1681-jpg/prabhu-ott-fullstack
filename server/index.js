require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>res.json({status:'Backend running'}));

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log('MongoDB connected'))
  .catch(e=>console.error(e));

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>console.log('Server running on', PORT));
