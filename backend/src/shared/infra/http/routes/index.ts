import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import monthsRouter from '@modules/months/infra/http/routes/months.routes';
import typesRouter from '@modules/types/infra/http/routes/types.routes';
import transactionsRouter from '@modules/transactions/infra/http/routes/transactions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/months', monthsRouter);
routes.use('/types', typesRouter);
routes.use('/transactions', transactionsRouter);


export default routes;
