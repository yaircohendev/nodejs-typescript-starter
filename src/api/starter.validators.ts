import Joi from 'joi';
import { NextFunction, Response } from 'express';
import { HttpStatusCode } from '../shared/types/http.model';

export const validateInput = (request: { body: any }, res: Response, next: NextFunction) => {
    const body = request.body;
    const schema = Joi.object({
        prop1: Joi.string().required(),
        prop2: Joi.string().required(),
        prop3: Joi.string().required(),
    });
    const validation = schema.validate(body);
    if (validation.error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            status: HttpStatusCode.BAD_REQUEST,
            error: validation.error.message,
        });
        return;
    }
    next();
};
