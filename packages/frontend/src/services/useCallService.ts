import { isServiceError, ServiceError } from "@tsm-example/api";
import { ClientServiceCallers } from "./serviceCallers";
import { useCallback, useEffect, useState } from "react";
import { convertErrorToString } from "../lib/convertErrorToString";

export function useCallService<T>(callback: () => Promise<T | ServiceError>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [reloadKey, setReloadKey] = useState(0);

  const onLoad = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await callback();
      if (isServiceError(response)) {
        setError(convertErrorToString(response));
      } else {
        setResult(response);
      }
    } catch (err) {
      setError(convertErrorToString(err))
    } finally {
        setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    onLoad();
  }, [reloadKey]);

  const onReload = useCallback(() => setReloadKey((prev) => prev + 1), []);

  return {
    isLoading,
    result,
    error,
    onReload,
  }
}