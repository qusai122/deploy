import { Product } from '@/models/Product';
import { RequestHandler, Request, Response } from 'express';
import { ParsedQs } from 'qs';
const { Op } = require('sequelize');

export const getLimitedEdition: RequestHandler = async (req, res) => {
  let products: Product[];
  products = await Product.findAll({
    where: {
      quantity: {
        [Op.lt]: 20,
      },
    },
  });

  return res.status(200).json(products);
};

export const getProducts: RequestHandler = async (req, res) => {
  const filter = createFilter(req.query);

  let products: Product[];
  products = await Product.findAll({
    where: filter,
  });

  return res.status(200).json(products);
};

function createFilter(query: ParsedQs) {
  const { limited } = query;
  const { discount } = query;
  const { rating } = query;
  const { isNew } = query;

  let filter = {};
  if (limited == '1') {
    filter['quantity'] = {
      [Op.lt]: 20,
    };
  }
  if (discount) {
    filter['discount'] = {
      [Op.gte]: discount,
    };
  }
  if (rating) {
    filter['rating'] = {
      [Op.gte]: rating,
    };
  }
  if (isNew == '1') {
    const currentDate = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
    filter['createdAt'] = {
      [Op.gte]: threeMonthsAgo,
    };
  }
  console.log(filter);
  return filter;
}
