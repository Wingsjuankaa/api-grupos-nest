import { DataSource } from 'typeorm';

//el data source es para que typeORM puede hacer la migracion

export const connectionSource = new DataSource({
  type: 'postgres',
  host: '10.69.206.34',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'Dev_isa_support',
  logging: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/db/migrations/*.ts'],
});
//yarn migration:generate src/database/migrations/init --> comando base para generar la migracion
//yarn m:run --> comando para ejecutar las tablas creadas
