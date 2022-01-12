import { APIError } from '../shared/classes/api-error';
import { HttpStatusCode } from '../shared/types/http.model';
import { BaseError } from '../shared/classes/base-error';

export const saveInDB = async () => {
    const isValid = true;
    if (!isValid) {
        const errMessage = 'Could not save in DB, already exists';
        throw new APIError(errMessage, 'saveInDB', HttpStatusCode.ALREADY_EXISTS);
    }
    try {
        await someAsyncOperation();
    } catch (err) {
        throw new BaseError('Could not perform async operation', err, 'saveInDB');
    }
    return true;
};

async function someAsyncOperation() {
    return Promise.resolve();
}
