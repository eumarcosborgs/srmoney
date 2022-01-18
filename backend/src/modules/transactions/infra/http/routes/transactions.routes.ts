import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { TransactionsController } from '../controllers/TransactionsController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const transactionsRouter = Router();

const transactionsController = new TransactionsController();

transactionsRouter.use(ensureAuthenticated);

transactionsRouter.post('/:type_name/:month_name',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      type: Joi.string().required(),
      category: Joi.string().required(),
      amount: Joi.number().required(),
      date: Joi.date().required(),
    },
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
      month_name: Joi.string().required(),
    },
  }),
  transactionsController.create
);

transactionsRouter.get('/:type_name/:month_name',
  celebrate({
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
      month_name: Joi.string().required(),
    },
  }),
  transactionsController.index
);

transactionsRouter.get('/:type_name/:month_name/:id',
  celebrate({
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
      month_name: Joi.string().required(),
      id: Joi.number().required(),
    },
  }),
  transactionsController.show
);

export default transactionsRouter;
