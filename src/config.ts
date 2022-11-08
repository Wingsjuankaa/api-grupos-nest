import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      dbName: 'Dev_isa_support',
      port: 5432,
      password: 'postgres',
      user: 'postgres',
      host: '10.69.206.34',
      ssl: 'DEV',
    },
  };
});
