import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { MonthsController } from '../controllers/MonthsController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const monthsRouter = Router();

const monthsController = new MonthsController();

monthsRouter.use(ensureAuthenticated);

monthsRouter.post('/:type_name',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
    },
    [Segments.PARAMS]: {
      type_name: Joi.string(),
    },
  }),
  monthsController.create
);

monthsRouter.get('/:type_name',
  celebrate({
    [Segments.PARAMS]: {
      type_name: Joi.string(),
    },
  }),
  monthsController.index
);

export default monthsRouter;
