import { setupSwagger } from '@/swagger';
import { AppModule } from '@modules/app.module';
import { ConfigService } from '@modules/config/config.service';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { ZodSerializationException, ZodValidationPipe } from 'nestjs-zod';

@Catch(HttpException)
class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    if (exception instanceof ZodSerializationException) {
      const zodError = exception.getZodError() as { message: string };
      this.logger.error(`ZodSerializationException: ${zodError.message}`);
    }

    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    httpAdapter.reply(
      ctx.getResponse(),
      exception.getResponse(),
      exception.getStatus(),
    );
  }
}

const DEFAULT_PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ZodValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter(app.get(HttpAdapterHost)));

  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.get('NODE_ENV') === 'production' ? false : true,
    credentials: true,
  });

  setupSwagger(app);

  const port = process.env.PORT ?? DEFAULT_PORT;
  await app.listen(port);
}

void bootstrap();
