import type {
  AvailableServices,
  ServiceDefinition,
  ServiceError,
} from "@tsm-example/api";
import { isEmpty } from "lodash-es";
import { convertErrorToString } from "../../lib/convertErrorToString";
import type { ServiceCaller } from "./types";

function makeFetchRequest<ReturnValue>(
  resolvedSlug: string,
  method?: "POST" | "PUT" | "DELETE" | "PATCH",
): (payload?: unknown) => Promise<ReturnValue | ServiceError> {
  return async (payload: unknown) => {
    try {
      const response = await fetch(resolvedSlug, {
        body: payload == null ? undefined : JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        method: method ?? "POST",
      });

      return response.json();
    } catch (error) {
      return {
        code: 500,
        message: `Error captured in the browser: ${convertErrorToString(error)}`,
        path: resolvedSlug,
        type: "error",
      };
    }
  };
}

function makeGetRequest<ReturnValue>(
  resolvedSlug: string,
): (payload?: unknown) => Promise<ReturnValue | ServiceError> {
  return async (payload: unknown) => {
    try {
      if (payload == null || isEmpty(payload)) {
        const response = await fetch(`${resolvedSlug}`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        });

        return response.json();
      }

      const parameters = new URLSearchParams(payload as Record<string, string>);
      const response = await fetch(`${resolvedSlug}?${parameters}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      return response.json();
    } catch (error) {
      return {
        code: 500,
        message: `Error captured in the browser: ${convertErrorToString(error)}`,
        path: resolvedSlug,
        type: "error",
      };
    }
  };
}

export function constructSingleServiceCaller<
  Key extends keyof AvailableServices,
>(
  hostUrl: string,
  serviceDefinition: ServiceDefinition<AvailableServices[Key]>,
): ServiceCaller<AvailableServices[Key]> {
  const serviceCaller = {} as ServiceCaller<AvailableServices[Key]>;

  for (const [endpoint, slug] of Object.entries(serviceDefinition.endpoints)) {
    const typedEndpoint = endpoint as keyof ServiceCaller<
      AvailableServices[Key]
    >;

    if (typeof slug === "string") {
      const resolvedSlug = `${hostUrl}/${serviceDefinition.controller}/${slug}`;
      serviceCaller[typedEndpoint] = makeFetchRequest(resolvedSlug);
    } else if (slug.method === "GET") {
      const resolvedSlug = `${hostUrl}/${serviceDefinition.controller}/${slug.path}`;
      serviceCaller[typedEndpoint] = makeGetRequest(resolvedSlug);
    } else {
      const resolvedSlug = `${hostUrl}/${serviceDefinition.controller}/${slug.path}`;
      serviceCaller[typedEndpoint] = makeFetchRequest(
        resolvedSlug,
        slug.method,
      );
    }
  }

  return serviceCaller;
}
