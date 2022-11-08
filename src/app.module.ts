import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [
    EquiposModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
