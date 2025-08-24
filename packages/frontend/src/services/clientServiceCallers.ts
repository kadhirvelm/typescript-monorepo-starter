import { getAvailableServiceCallers } from "./helpers/getServices";

export const ClientServiceCallers = getAvailableServiceCallers(
  process.env.NEXT_PUBLIC_API_CLIENT_URL ?? "",
);
