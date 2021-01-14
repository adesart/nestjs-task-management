// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { Logger } from '@nestjs/common';
// import * as config from 'config';

// async function bootstrap() {
//   const logger = new Logger('bootstrap');
//   const app = await NestFactory.create(AppModule);
//   const serverConfig = config.get('server');

//   const port = process.env.PORT || serverConfig.port;

//   await app.listen(port);
//   app.enableCors();  // <======
//   logger.log(`Application listening on port ${port}`);
// }

// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const serverConfig = config.get('server');

  const port = process.env.PORT || serverConfig.port;

  app.listen(port, () => {
    console.log(`Server Running on port: ${port}`);
  });

  app.enableCors();  // <======

}

bootstrap();
