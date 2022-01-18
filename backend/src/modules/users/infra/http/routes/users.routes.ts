import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateSessionController } from '../controllers/CreateSessionController';

const usersRouter = Router();

const createSessionController = new CreateSessionController();

usersRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  createSessionController.execute
);

export default usersRouter;
