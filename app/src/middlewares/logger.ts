import * as express from 'express'

function logger(
  request: express.Request,
  response: express.Response,
  next:any
) {
  console.log(`hostname: ${request.hostname} method: ${request.method} path: ${request.path}`);
  next();
}

export default logger