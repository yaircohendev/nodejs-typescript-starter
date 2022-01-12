import express from 'express';
import { validateInput } from './starter.validators';
import { installSomething } from './starter.controller';

const router = express.Router();

router.post('/install', validateInput, installSomething);

export default router;
