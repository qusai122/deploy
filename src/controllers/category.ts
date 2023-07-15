import { Category } from '@/models/Category';
import { Brand } from '@/models/Brand';
import { getCategories } from '@/services/category';
import { RequestHandler, Request, Response } from 'express';
import { createProductFilter, getProductsByFilter } from '@/services/product';
const { Op } = require('sequelize');

export const getAllCategories: RequestHandler = async (req, res) => {
  try {
    const result = await getCategories();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getCategoryProducts: RequestHandler = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getProductsByFilter({ category_id: id });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
