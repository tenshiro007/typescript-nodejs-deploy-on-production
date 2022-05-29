import * as express from "express";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello world , This is demo of using typescript with nodejs");
});

export default router;
