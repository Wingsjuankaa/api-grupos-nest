import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configurar títulos de documentación
  const options = new DocumentBuilder()
    .setTitle('PostgreSQL Equipos IsaSupport')
    .setDescription('API REST para equipos de inventario')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // La ruta en que se sirve la documentación
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  await app.listen(8009);
}
bootstrap();
