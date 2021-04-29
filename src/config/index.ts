import {configDev} from './environments/app.development';
import {configProd} from './environments/app.production';

const getEnvironment = (env = 'development') => {
  switch (env) {
    case 'development':
      return configDev;
      case 'production':
      return configProd;
      default:
      return configDev;
  }
};

const Config = getEnvironment();

export default Config;
