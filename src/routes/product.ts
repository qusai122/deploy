import { Router } from 'express';
import {
  getLimitedEdition,
  getProducts,
  getHandpicked,
  getPopular,
  getNewArrivals,
} from '@controllers/product';
const router = Router();

router.get('/', getProducts);
router.get('/limited', getLimitedEdition);
router.get('/handpicked', getHandpicked);
router.get('/Popular', getPopular);
router.get('/new', getNewArrivals);

export default router;
