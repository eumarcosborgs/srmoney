import { Router } from 'express';

import { SessionController } from '../controllers/SessionController';

const usersRouter = Router();
const sessionController = new SessionController();

usersRouter.post('/', sessionController.create);

export default usersRouter;
