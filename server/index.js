import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';




const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true})); //limita o envio de imagem em 30mb 
app.use(bodyParser.urlencoded({limit: '30mb',extended: true}));

app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://edson:Aher0kesh182@cluster0.unopo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

//No video eram passados parametros para conexão com o mongoose, mas estão depreciados 
mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error)=> console.log(error.message));



//https://www.mongodb.com/cloud/atlas