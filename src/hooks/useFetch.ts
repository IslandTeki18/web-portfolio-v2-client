import { useState, useEffect } from "react";
import { PRODUCTION_URL, NODE_ENV, DEVELOPMENT_URL } from "~src/config";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const URL = NODE_ENV === "development" ? DEVELOPMENT_URL : PRODUCTION_URL;

const useFetch = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}${url}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: T = await response.json();
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
};

export { useFetch };
