import { Request, Response, NextFunction } from 'express';
import {
  getCardItemById,
  removeItemFromCartItem,
  createCartItem,
  updateCartItemQuantity,
  getAllCardItemsByCartId,
  calculateTotalPrice,
  createOrUpdateCartItem,
} from '@services/cartItems';
import { getCardById } from '@services/cart';
import {
  HttpException,
  constants,
  messages,
  errorResponse,
} from '@utils/index';
import { Product } from '@/models/Product';

export const getCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { cartItemId } = req.params;
  const { httpStatus } = constants;

  try {
    const cartItemt = await getCardItemById(+cartItemId);

    res.status(httpStatus.OK).json({ success: true, message: 'OK', cartItemt });
  } catch (error) {
    next(error);
  }
};

export const getAllCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { httpStatus } = constants;

  try {
    const cartItemts = await getAllCardItemsByCartId(req.user.currentCartId);

    res
      .status(httpStatus.OK)
      .json({ success: true, message: 'OK', cartItemts });
  } catch (error) {
    next(error);
  }
};

export const updateQuantity = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { state } = req.body;
  const { cartItemId } = req.params;
  const userCartId = req.user.currentCartId;

  const { httpStatus } = constants;
  const { cartItemResponse, generalResponse } = messages;
  try {
    const cartItem = await getCardItemById(+cartItemId);

    if (!cartItem) {
      throw new HttpException(
        httpStatus.NOT_FOUND,
        cartItemResponse.ITEM_NOT_FOUND
      );
    }

    await updateCartItemQuantity(+cartItemId, cartItem.quantity, state);

    const cart = await getCardById(userCartId);

    if (!cart) {
      throw new HttpException(
        httpStatus.NOT_FOUND,
        messages.cartResponse.CART_NOT_FOUND
      );
    }

    const totalPrice = await calculateTotalPrice(userCartId);
    cart.subTotal = totalPrice;
    await cart.save();

    res.status(httpStatus.OK).json({
      success: true,
      message: generalResponse.UPDATE_CART_ITEM_QUANTITY_SUCCESS,
      cartItem,
    });
  } catch (error) {
    next(error);
  }
};

export const createNewCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { quantity, productId } = req.body;
  const { httpStatus } = constants;
  const { generalResponse } = messages;

  try {
    const userCartId = req.user.currentCartId;
    // console.log({ quantity, productId, userCartId });
    const cart = await getCardById(userCartId);
    if (!cart) {
      throw new HttpException(
        httpStatus.NOT_FOUND,
        messages.cartResponse.CART_NOT_FOUND
      );
    }

    const existingCartItem = cart.items.find(
      (item) => item.productId === productId
    );
    // console.log({ existingCartItem });

    if (existingCartItem) {
      // Product already exists in cart, increment the quantity by 1
      existingCartItem.quantity += quantity;
      await existingCartItem.save();

      await createOrUpdateCartItem(userCartId, productId, quantity);

      res.status(httpStatus.OK).json({
        message: generalResponse.UPDATE_CART_ITEM_QUANTITY_SUCCESS,
        cartItem: existingCartItem,
      });
    } else {
      // Product not found in cart, create a new cart item
      const cartItem = await createCartItem({
        productId,
        quantity,
        cartId: userCartId,
      });

      await createOrUpdateCartItem(userCartId, productId, quantity);

      res.status(httpStatus.CREATED).json({
        message: generalResponse.CREATE_CART_ITEM_SUCCESS,
        cartItem,
      });
    }
  } catch (error) {
    console.log({ error });
    next(error);
  }
};

export const deleteCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { cartItemId } = req.params;
  const userCartId = req.user.currentCartId;
  const { httpStatus } = constants;
  const { generalResponse } = messages;

  try {
    const numberReflect = await removeItemFromCartItem(+cartItemId);

    if (numberReflect !== 1) {
      throw new HttpException(
        httpStatus.INTERNAL_SERVER_ERROR,
        errorResponse.SERVER
      );
    }

    const cart = await getCardById(userCartId);

    if (!cart) {
      throw new HttpException(
        httpStatus.NOT_FOUND,
        messages.cartResponse.CART_NOT_FOUND
      );
    }

    const totalPrice = await calculateTotalPrice(userCartId);

    cart.subTotal = totalPrice;
    await cart.save();
    res
      .status(httpStatus.CREATED)
      .json({ message: generalResponse.DELETE_CART_ITEM_SUCCESS });
  } catch (error) {
    console.log({ error });
    next(error);
  }
};
