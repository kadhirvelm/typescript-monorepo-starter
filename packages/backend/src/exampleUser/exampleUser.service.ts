import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class ExampleUserService {
  public constructor(private prisma: PrismaService) {}

  public async create(name: string) {
    const newUser = await this.prisma.client.exampleUser.create({
      data: {
        name,
      },
    });

    return {
      id: newUser.id,
    };
  }

  public async get(id: string) {
    const user = await this.prisma.client.exampleUser.findUnique({
      where: {
        id,
      },
    });

    if (user == null) {
      throw new BadRequestException(`User with id ${id} not found`);
    }

    return { id: user.id, name: user.name };
  }
}
