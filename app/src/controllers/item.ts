import * as express from 'express'
import Item from '../interfaces/item'

class ItemController{
    public router=express.Router()

    private items: Item[] = [
        {
            id: 1,
            name: "milk",
            desc:"drink before bed"
        },
        {
            id: 2,
            name: "apple",
            desc:"eat to be a smart person"
        },
        {
            id: 3,
            name: "water",
            desc:"drink to live"
        },
        {
            id: 4,
            name: "pizza",
            desc:"i dont like it"
        }
    ]

    // constructor() {
        
    // }

    // public initialzeRoutes() {
        
    // }
    getAllItem = (req:express.Request,res:express.Response) => {
        res.send(this.items)
    }

    addItem = (req: express.Request, res:express.Response) => {
        // console.log(req.body)
        const newItem: Item = req.body
        this.items.push(newItem)
        res.send('added successfully')
    }
}

export default ItemController;