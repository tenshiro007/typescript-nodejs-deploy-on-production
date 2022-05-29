import * as express from 'express'
import ItemController from '../controllers/item';
import validation from '../middlewares/validate';

const router = express.Router();
const myItem = new ItemController();

router.get('/',myItem.getAllItem)
router.post("/", validation, myItem.addItem);

export default router
