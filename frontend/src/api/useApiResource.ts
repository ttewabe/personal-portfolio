import { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api';
const RETRY_DELAY_MS = 3000;

export function useApiResource<T>(
  endpoint: string,
  isValid: (value: unknown) => value is T,
  hasData: (value: T) => boolean,
): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let cancelled = false;
    let retryTimeout: ReturnType<typeof setTimeout>;

    const load = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const result: unknown = await response.json();
        if (!isValid(result)) {
          throw new Error(`Invalid response from ${endpoint}`);
        }

        if (cancelled) {
          return;
        }

        if (hasData(result)) {
          setData(result);
          return;
        }
      } catch (error) {
        if (!cancelled) {
          console.error(`Unable to load ${endpoint}; retrying shortly.`, error);
        }
      }

      if (!cancelled) {
        retryTimeout = setTimeout(load, RETRY_DELAY_MS);
      }
    };

    void load();

    return () => {
      cancelled = true;
      clearTimeout(retryTimeout);
    };
  }, [endpoint, hasData, isValid]);

  return data;
}
