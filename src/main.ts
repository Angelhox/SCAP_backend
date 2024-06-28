import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: '*', // Permite todas las solicitudes de cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // Encabezados permitidos
  });
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      // forbidNonWhitelisted: true,
      // transform: true,
    }),
  );
  await app.listen(parseInt(process.env.PORT) || 4000);
}
bootstrap();
