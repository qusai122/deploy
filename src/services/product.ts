import { Op } from 'sequelize';
import { ParsedQs } from 'qs';

import { Product } from '@models/Product';
import { ProductImage } from '@/models/ProductsImage';

export async function getProductsByFilter(filter): Promise<Product[]> {
  try {
    return await Product.findAll({
      where: filter,
      include: ProductImage,
    });
  } catch (e) {
    return e;
  }
}

export function createProductFilter(query: ParsedQs): Record<string, object> {
  const { quantity, discount, rating, isNew, handpicked, minPrice, maxPrice } =
    query;

  const filter = {};

  if (quantity) {
    filter['quantity'] = {
      [Op.lt]: quantity,
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
    const threeMonthsAgo = getNewArrivalsEarliestDate();
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
  console.log(filter);
  return filter;
}

export function getNewArrivalsEarliestDate(): Date {
  const date = new Date();
  date.setMonth(date.getMonth() - 3);
  return date;
}
