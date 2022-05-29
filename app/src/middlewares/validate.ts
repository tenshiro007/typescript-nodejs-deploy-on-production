import * as express from 'express'

function validation(req: express.Request, res: express.Response, next: any) {
    const { id, name, desc } = req.body
    if (!(id && name && desc)) {
       return res.status(500).send("Please set Item to all field")
    }
    next()
}

export default validation