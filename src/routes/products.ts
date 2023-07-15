import { Router } from 'express';
import { ProductsByBrandQueryDto } from '@dtos/products.dto';
const router = Router();

router.route('/').get();
