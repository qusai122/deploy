import { Router } from 'express';
import { ProductsByBrandQueryDto } from '@dtos/products.dto';
import { validationMiddleware } from '@middlewares/validation';

const router = Router();

router.route('/').get(validationMiddleware(ProductsByBrandQueryDto, 'query'));
