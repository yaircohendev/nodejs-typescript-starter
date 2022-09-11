import express, { NextFunction, Request, Response } from 'express';
import { logger } from './shared/classes/logger';
import { ErrorHandler } from './shared/classes/error-handler';
import { BaseError } from './shared/classes/base-error';
import ordersRoutes from './api/orders/orders.routes';

const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
const errorHandler = new ErrorHandler(logger);

app.use('/orders', ordersRoutes);

app.use(errorMiddleware);

app.listen(port, async () => {
    logger.info(`Server is listening on port ${port}!`);
});

process.on('uncaughtException', async (error: Error) => {
    await errorHandler.handleError(error);
    if (!errorHandler.isTrustedError(error)) process.exit(1);
});

process.on('unhandledRejection', (reason: Error) => {
    throw reason;
});

async function errorMiddleware(err: BaseError, req: Request, res: Response, next: NextFunction) {
    if (!errorHandler.isTrustedError(err)) {
        next(err);
        return;
    }
    await errorHandler.handleError(err);
}
