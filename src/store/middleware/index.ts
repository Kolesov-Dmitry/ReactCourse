import { messageMiddleware } from './messageMiddleware';
import {incomingMiddleware } from './incomingMiddleware';

export const middlewares = [messageMiddleware, incomingMiddleware];