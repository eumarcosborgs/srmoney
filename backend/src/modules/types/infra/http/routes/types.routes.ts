import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { CreateTypeController } from '../controllers/CreateTypeController';
import { ShowTypeController } from '../controllers/ShowTypeController';
import { IndexTypesController } from '../controllers/IndexTypesController';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const typesRouter = Router();

const createTypeController = new CreateTypeController();
const showTypeController = new ShowTypeController();
const indexTypesController = new IndexTypesController();

typesRouter.use(ensureAuthenticated);

typesRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  createTypeController.execute
);

typesRouter.get('/show/:type_name',
  celebrate({
    [Segments.PARAMS]: {
      type_name: Joi.string().required(),
    },
  }),
  showTypeController.execute
);

typesRouter.get('/:page/:quantity_per_page',
  celebrate({
    [Segments.PARAMS]: {
      page: Joi.number().required(),
      quantity_per_page: Joi.number().required()
    },
  }),
  indexTypesController.execute

);

export default typesRouter;
