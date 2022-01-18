import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { CreateMonthController } from '../controllers/CreateMonthController';
import { IndexMonthsController } from '../controllers/IndexMonthsController';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const monthsRouter = Router();

const createMonthController = new CreateMonthController();
const indexMonthsController = new IndexMonthsController();

monthsRouter.use(ensureAuthenticated);

monthsRouter.post('/:type_name',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
    },
  }),
  createMonthController.execute
);

monthsRouter.get('/:type_name/:page/:quantity_per_page',
  celebrate({
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
      page: Joi.number().required(),
      quantity_per_page: Joi.number().required(),
    },
  }),
  indexMonthsController.execute
);

export default monthsRouter;
