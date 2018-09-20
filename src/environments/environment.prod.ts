import { Environment } from './environment.i';

export const environment: Environment = {
  host: 'http://segotl1814.got.volvo.net:18081',
  api: 'http://segotl1814.got.volvo.net:3000/api',
  oauth: {
    url: 'https://federate-qa.volvo.com',
    clientId: 'pos-uiservice-rest'
  },
  production: true,
  environmentName: 'prod'
};
