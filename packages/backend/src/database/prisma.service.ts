import { ConfigurationService } from "@/configuration/configuration.service";
import { Injectable, Logger } from "@nestjs/common";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@tsm-example/database";

@Injectable()
export class PrismaService {
  public logger = new Logger("PrismaClient");

  public client: PrismaClient;

  constructor(
    private configService: ConfigurationService
  ) {
    const environment = this.configService.get("NODE_ENV");
    this.logger.log(`Creating prisma client - ${environment}`);

    if (environment === "production") {
      const adapter = new PrismaNeon({
        connectionString: this.configService.get("DATABASE_HOST_URL")
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.client = new PrismaClient({ adapter: adapter as any });
    } else {
      this.client = new PrismaClient();
    }
  }
}
