import type { RemoveExtendsString } from "./removeExtendsString";

/**
 * Used to declare the interface (payloads and responses) for a service definition.
 */
export interface Service {
  [key: string]: {
    /**
     * If the payload is null, the service call will not have a payload.
     */
    payload: unknown | null;
    /**
     * The response from the service call.
     */
    response: unknown;
  };
}

/**
 * The endpoint definition for a service, which allows us to define the method and path for the endpoint.
 */
export interface ServiceEndpointDefinition {
  /**
   * The method for the endpoint.
   */
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  /**
   * The path for the endpoint.
   */
  path: string;
}

/**
 * The endpoint for a service, which allows us to define the method and path for the endpoint.
 *
 * By default, all endpoints are POST routes, defined as `${controller}/${endpoint}`.
 * If you want to use a GET route, you can define the endpoint as a string, or as a ServiceEndpointDefinition.
 */
export type ServiceEndpoint<Key> = Key | ServiceEndpointDefinition;

/**
 * Used to declare the interface for the expected backend implementation service.
 * All routes are POST routes, defined as `${controller}/${endpoint}`.
 */
export type ServiceDefinition<Service> = {
  /**
   * The controller name for the service.
   */
  controller: string;
  /**
   * The endpoints for the service. This is how the frontend will call on the service.
   */
  endpoints: {
    [Key in keyof RemoveExtendsString<Service>]: ServiceEndpoint<Key>;
  };
};
