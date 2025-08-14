import { Injectable, Logger } from "@nestjs/common";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@tsm-example/database";
import type { ConfigurationService } from "@/configuration/configuration.service";

@Injectable()
export class PrismaService {
	public logger = new Logger("PrismaClient");

	public client: PrismaClient;

	constructor(private configService: ConfigurationService) {
		const environment = this.configService.get("NODE_ENV");
		this.logger.log(`Creating prisma client - ${environment}`);

		if (environment === "production") {
			const adapter = new PrismaNeon({
				connectionString: this.configService.get("DATABASE_HOST_URL"),
			});

			// biome-ignore lint/suspicious/noExplicitAny: something is wrong with the types here
			this.client = new PrismaClient({ adapter: adapter as any });
		} else {
			this.client = new PrismaClient();
		}
	}
}
