const { Op } = require('sequelize');
import { Product } from '@/models/Product';
import { ParsedQs } from 'qs';

export async function getProductsByFilter(filter) {
  return await Product.findAll({
    where: filter,
  });
}

export function createProductFilter(query: ParsedQs) {
  const { limited, discount, rating, isNew, handpicked, minPrice, maxPrice } =
    query;

  const filter = {};
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
  if (handpicked == '1') {
    filter['rating'] = {
      [Op.gte]: 4.5,
    };
    filter['price'] = {
      [Op.lt]: 100,
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
  if (minPrice && maxPrice) {
    filter['price'] = {
      [Op.between]: [minPrice, maxPrice],
    };
  } else if (minPrice) {
    filter['price'] = {
      [Op.gte]: minPrice,
    };
  } else if (maxPrice) {
    filter['price'] = {
      [Op.lte]: maxPrice,
    };
  }
  return filter;
}
