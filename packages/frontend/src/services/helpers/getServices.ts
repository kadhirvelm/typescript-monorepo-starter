import { AVAILABLE_SERVICES, type AvailableServices } from "@tsm-example/api";
import { constructSingleServiceCaller } from "./constructSingleServiceCaller";
import type { AvailableServiceCaller, ServiceCaller } from "./types";

export function getAvailableServiceCallers(
  hostUrl: string,
): AvailableServiceCaller {
  const services: {
    [key: string]: ServiceCaller<AvailableServices[keyof AvailableServices]>;
  } = {};

  for (const [key, serviceDefinition] of Object.entries(AVAILABLE_SERVICES)) {
    const typedKey = key as keyof AvailableServices;
    services[typedKey] = constructSingleServiceCaller<typeof typedKey>(
      hostUrl,
      serviceDefinition,
    );
  }

  return services as AvailableServiceCaller;
}
