const { Op } = require('sequelize');
import { Product } from '@/models/Product';
import { ParsedQs } from 'qs';
import { FindOptions, WhereOptions } from 'sequelize';

export async function getProductsByFilter(filter: FindOptions) {
  console.log(filter);
  try {
    return await Product.findAll(filter);
  } catch (e) {
    return e;
  }
}

export function createProductFilter(query: ParsedQs) {
  const {
    quantity,
    discount,
    rating,
    isNew,
    handpicked,
    minPrice,
    maxPrice,
    pageLimit,
    pageNumber,
    brand_id,
    category_id,
  } = query;

  const limit: number = pageLimit ? Number(pageLimit) : 9; // default is 9
  const offset: number = pageNumber ? (Number(pageNumber) - 1) * limit : 0;

  const where = {};

  if (quantity) {
    where['quantity'] = {
      [Op.lt]: quantity,
    };
  }
  if (category_id) {
    where['category_id'] = category_id;
  }
  if (brand_id) {
    where['brand_id'] = brand_id;
  }

  if (discount) {
    where['discount'] = {
      [Op.gte]: discount,
    };
  }
  if (rating) {
    where['rating'] = {
      [Op.gte]: rating,
    };
  }
  if (handpicked == '1') {
    where['rating'] = {
      [Op.gte]: 4.5,
    };
    where['price'] = {
      [Op.lt]: 100,
    };
  }
  if (isNew == '1') {
    const threeMonthsAgo = getNewArrivalsEarliestDate();
    where['createdAt'] = {
      [Op.gte]: threeMonthsAgo,
    };
  }
  if (minPrice && maxPrice) {
    where['price'] = {
      [Op.between]: [minPrice, maxPrice],
    };
  } else if (minPrice) {
    where['price'] = {
      [Op.gte]: minPrice,
    };
  } else if (maxPrice) {
    where['price'] = {
      [Op.lte]: maxPrice,
    };
  }

  return { where, limit, offset };
}

export function getNewArrivalsEarliestDate() {
  const date = new Date();
  date.setMonth(date.getMonth() - 3);
  return date;
}
