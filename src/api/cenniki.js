import { config } from '../config';
import axios from 'axios';

const url = `${config.API_PATH}/cenniki`;

export const cennikiDataSource = (select, key) => {
  return {
    store: {
      type: 'odata',
      url,
      version: 4,
      key: key || 'Id'
    },
    select
  };
};
