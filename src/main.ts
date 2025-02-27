import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { KafkaModule } from './kafka/kafka.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(KafkaModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9094'], // Update with your Kafka broker
      },
      consumer: {
        groupId: 'rbc-consumer-group',
      },
    },
  });
  await app.listen();
  console.log('Kafka microservice is running...');
}
bootstrap();
