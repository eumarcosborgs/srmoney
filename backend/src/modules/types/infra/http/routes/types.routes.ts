import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { TypesController } from '../controllers/TypesController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const typesRouter = Router();

const typesController = new TypesController();

typesRouter.use(ensureAuthenticated);

typesRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  typesController.create
);

typesRouter.get('/:type_name',
  celebrate({
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
    },
  }),
  typesController.show
);

typesRouter.get('/', typesController.index);

export default typesRouter;
