import { container } from 'tsyringe';

import '@modules/users/providers';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';

import { IMonthsRepository } from '@modules/months/repositories/IMonthsRepository';
import { MonthsRepository } from '@modules/months/infra/typeorm/repositories/MonthsRepository';

import { ITypesRepository } from '@modules/types/repositories/ITypesRepository';
import { TypesRepository } from '@modules/types/infra/typeorm/repositories/TypesRepository';

import { ITransactionsRepository } from '@modules/transactions/repositories/ITransactionsRepository';
import { TransactionsRepository } from '@modules/transactions/infra/typeorm/repositories/TransactionsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IMonthsRepository>(
  'MonthsRepository',
  MonthsRepository,
);

container.registerSingleton<ITypesRepository>(
  'TypesRepository',
  TypesRepository,
);

container.registerSingleton<ITransactionsRepository>(
  'TransactionsRepository',
  TransactionsRepository,
);
