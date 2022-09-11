import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../../shared/classes/base-error';
import { APIError } from '../../shared/classes/api-error';
import { placeOrder } from './orders.service';

export const placeStockOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await placeOrder();
        res.send(results);
    } catch (err) {
        const message = err instanceof APIError ? err.message : `Generic error for user`;
        res.status((<BaseError>err)?.httpCode || 500).send(message);
        next(err);
    }
};
