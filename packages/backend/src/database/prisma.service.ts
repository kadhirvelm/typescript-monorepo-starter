import { Injectable, Logger } from "@nestjs/common";
import { PrismaClient } from "@tsm-example/database";
import type { ConfigurationService } from "@/configuration/configuration.service";

@Injectable()
export class PrismaService {
  public logger = new Logger("PrismaClient");

  public client: PrismaClient;

  constructor(private configService: ConfigurationService) {
    const environment = this.configService.get("NODE_ENV");
    this.logger.log(`Creating prisma client - ${environment}`);
    this.client = new PrismaClient();
  }
}
