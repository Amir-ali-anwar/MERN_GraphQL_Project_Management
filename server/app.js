import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/connect.js";
import schema from './schema/schema.js'
import { graphqlHTTP } from "express-graphql";
import "express-async-errors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('tiny'))
app.use("/graphql",graphqlHTTP({
  schema,
   graphiql: true,
  graphiql:process.env.NODE_ENV==='development'
}));
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