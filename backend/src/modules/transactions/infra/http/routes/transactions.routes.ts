import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { CreateTransactionController } from '../controllers/CreateTransactionController';
import { DeleteTransactionController } from '../controllers/DeleteTransactionController';
import { IndexTransactionsController } from '../controllers/IndexTransactionsController';
import { ShowTransactionController } from '../controllers/ShowTransactionController';
import { UpdateTransactionController } from '../controllers/UpdateTransactionController';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const transactionsRouter = Router();

const createTransactionController = new CreateTransactionController();
const deleteTransactionController = new DeleteTransactionController();
const indexTransactionsController = new IndexTransactionsController();
const showTransactionController = new ShowTransactionController();
const updateTransactionController = new UpdateTransactionController();

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
  createTransactionController.execute
);

transactionsRouter.get('/:type_name/:month_name',
  celebrate({
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
      month_name: Joi.string().required(),
    },
  }),
  indexTransactionsController.execute
);

transactionsRouter.get('/:type_name/:month_name/:id',
  celebrate({
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
      month_name: Joi.string().required(),
      id: Joi.number().required(),
    },
  }),
  showTransactionController.execute
);

transactionsRouter.put('/:type_name/:month_name/:id',
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
      id: Joi.number().required(),
    },
  }),
  updateTransactionController.execute
);

transactionsRouter.delete('/:type_name/:month_name/:id',
  celebrate({
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
      month_name: Joi.string().required(),
      id: Joi.number().required(),
    },
  }),
  deleteTransactionController.execute
);

export default transactionsRouter;
