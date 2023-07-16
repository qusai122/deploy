import { getCategories } from '@/services/category';
import { Request, RequestHandler, Response } from 'express';
import { getProductsByFilter } from '@/services/product';
const { Op } = require('sequelize');

export const getAllCategories: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getCategories();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getCategoryProducts: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const result = await getProductsByFilter({ category_id: id });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
