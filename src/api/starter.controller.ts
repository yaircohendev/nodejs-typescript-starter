import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../shared/classes/base-error';
import { APIError } from '../shared/classes/api-error';
import { saveInDB } from './starter.service';

export const installSomething = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await saveInDB();
        res.send(results);
    } catch (err) {
        const message = err instanceof APIError ? err.message : `Generic error for user`;
        res.status((<BaseError>err)?.httpCode || 500).send(message);
        next(err);
    }
};
