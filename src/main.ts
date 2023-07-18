import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SERVER_PORT } from './consts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** Swagger config */
  const config = new DocumentBuilder()
    .setTitle('Notifikki server')
    .setDescription('Notifikki backend service')
    .setVersion('1.0')
    .addTag('notifikki')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /** Swagger config */

  await app.listen(SERVER_PORT);
}
bootstrap();
