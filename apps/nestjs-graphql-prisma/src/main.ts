import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await prisma.user.create({ data: { email: "cm@gmail.1com" + Math.random() * 10000, name: "cm" } })

  const allUsers = await prisma.user.findMany({})
  // console.dir(allUsers, { depth: null })
  console.log('========', allUsers)

  await app.listen(3000);
}

bootstrap();