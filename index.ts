import express, { Express, Request, Response } from 'express';
import path from 'path';
import constants from './src/config/constants'
import database from './src/config/database'
import cors from "cors";
import helmet from "helmet";
import { ErrorMiddleware } from "./src/middlewares/errorHandler";
import apiRoutes from "./src/routes";
require('express-async-errors')

const app: Express = express();
const port = constants.PORT || 8000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", apiRoutes());

app.use("/", (req, res) => {
  res.status(200).sendFile(path.resolve("public", "index.html"));
});

app.use(ErrorMiddleware);

app.listen(port, () => {
  database()
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.on("error", (error) => {
  console.log(`Error occured on the server ${error}`);
});
