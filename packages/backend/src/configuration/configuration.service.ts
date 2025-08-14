import { Injectable } from "@nestjs/common";

/**
 * The overall configuration for the application. Don't forget to update turbo.json to allow the variable
 * at build time.
 */
export interface Configuration {
	DATABASE_HOST_URL: string | undefined;
	DIRECT_URL: string | undefined;
	NODE_ENV: "production" | "development";
}

@Injectable()
export class ConfigurationService {
	private configuration: Configuration = {
		DATABASE_HOST_URL: process.env.DATABASE_HOST_URL,
		DIRECT_URL: process.env.DIRECT_URL,
		NODE_ENV: process.env.NODE_ENV as "production" | "development",
	};

	public get<T extends keyof Configuration>(key: T): Configuration[T] {
		return this.configuration[key];
	}
}
