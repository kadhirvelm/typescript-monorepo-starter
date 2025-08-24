import { Delete, Get, Patch, Post, Put } from "@nestjs/common";
import type {
  RemoveExtendsString,
  Service,
  ServiceEndpoint,
} from "@tsm-example/api";

/**
 * Used to declare the interface for the expected backend implementation service.
 */
export type ServiceControllerInterface<S extends Service> = {
  [Key in keyof RemoveExtendsString<S>]: (
    payload?: S[Key]["payload"],
  ) => S[Key]["response"] | Promise<S[Key]["response"]>;
};

/**
 * All endpoints are POST requests for now, but this pseudo-decorator allows us to
 * change that in the future if needed.
 */
export function getDecorator(endpoint: ServiceEndpoint<string>) {
  if (typeof endpoint === "string") {
    return Post(endpoint);
  }

  if (endpoint.method === "POST") {
    return Post(endpoint.path);
  }

  if (endpoint.method === "PUT") {
    return Put(endpoint.path);
  }

  if (endpoint.method === "DELETE") {
    return Delete(endpoint.path);
  }

  if (endpoint.method === "PATCH") {
    return Patch(endpoint.path);
  }

  return Get(endpoint.path);
}
