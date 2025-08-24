import type {
  AvailableServices,
  RemoveExtendsString,
  Service,
  ServiceError,
} from "@tsm-example/api";

/**
 * Used to call on the backend services from the browser for a specific service.
 */
export type ServiceCaller<S extends Service> = {
  [Key in keyof RemoveExtendsString<S>]: S[Key]["payload"] extends null
    ? () => Promise<S[Key]["response"] | ServiceError>
    : (
        payload: S[Key]["payload"],
      ) => Promise<S[Key]["response"] | ServiceError>;
};

/**
 * Stitches all the service callers together for the backend.
 */
export type AvailableServiceCaller = {
  [Key in keyof AvailableServices]: ServiceCaller<AvailableServices[Key]>;
};
