import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { SessionController } from '../controllers/SessionController';

const usersRouter = Router();
const sessionController = new SessionController();

usersRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  sessionController.create
);

export default usersRouter;
