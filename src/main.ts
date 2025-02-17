import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DefaultHeaders } from './lib/default.header';
import * as expressLayouts from 'express-ejs-layouts';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(expressLayouts);
  app.set('layout', './layout/layout');
  app.set('view engine', 'ejs');
  app.use(cookieParser());
  app.use(DefaultHeaders);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
