import { container } from 'tsyringe';

import ICasheProvider from './models/ICasheProvider';

import RedisCacheProvider from './implementations/RedisCacheProvider';

const providers = {
  redis: RedisCacheProvider,
};

container.registerSingleton<ICasheProvider>('CasheProvider', providers.redis);
