import express, { Application, Request, Response } from 'express';
import { todoRouter } from './routes/';
const api: Application = express();
// You may add api specific middlewares here

api.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Hello from the API',
  });
});

api.use('/todos', todoRouter);

export default api;
