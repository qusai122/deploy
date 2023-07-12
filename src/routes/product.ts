import { Router } from 'express';
import { getLimitedEdition, getProducts } from '@controllers/product';
const router = Router();

router.get('/limited-edition', getLimitedEdition);
router.get('/', getProducts);

export default router;
