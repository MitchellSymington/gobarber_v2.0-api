import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';

import HandlebarsMailTempleteProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
  handlebars: HandlebarsMailTempleteProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
