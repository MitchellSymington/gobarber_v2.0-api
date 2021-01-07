import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsRespository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRespository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRespository from '@modules/users/repositories/IUsersRepository';
import UsersRespository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserToeknsRespository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRespository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

container.registerSingleton<IAppointmentsRespository>(
  'AppointmentsRepository',
  AppointmentsRespository,
);

container.registerSingleton<IUsersRespository>(
  'UsersRepository',
  UsersRespository,
);

container.registerSingleton<IUserToeknsRespository>(
  'UserTokensRepository',
  UserTokensRespository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);
