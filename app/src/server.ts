import express, { Request, Response, Application } from "express";
import logger  from "./middlewares/logger";
import InfoRouter from './routers/info'
import ItemRouter from './routers/item'
import { errorHandler } from "./middlewares/errors";
import { notFoundHandler } from "./middlewares/notFound";

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(logger)
app.use(express.json());

app.use("/", InfoRouter);
app.use("/item", ItemRouter);

app.use(errorHandler);
app.use(notFoundHandler)

app.listen(port, (): void => {
  console.log(`Server runing at http://localhost:${port}`);
});