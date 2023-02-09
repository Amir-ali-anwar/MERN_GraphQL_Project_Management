import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/connect.js";
import schema from './schema/schema.js'
import { graphqlHTTP } from "express-graphql";
import cors from 'cors'
import "express-async-errors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
const PORT = process.env.port || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`server listening on the port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()