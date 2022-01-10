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
      name: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
    },
  }),
  monthsController.create
);

monthsRouter.get('/:type_id',
  celebrate({
    [Segments.PARAMS]: {
      type_id: Joi.string().required(),
    },
  }),
  monthsController.index
);

export default monthsRouter;
