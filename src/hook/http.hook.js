import { useContext } from "react";
import { useCallback, useState } from "react";
import { tokenCTX } from "../Component/Context/Token";

export const useHttp = () => {
  const token = useContext(tokenCTX);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(
    async (
      url,
      method= "GET",
      body = null,
      headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    ) => {
      setLoading(true);
      // if request is succesful
      try {
        const res = await fetch(url, { method, body, headers });

        // if we get bad request
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        const data = await res.json()
        setLoading(false);
        return data 

        // catch error
      } catch (error) {
        setLoading(false);
        setError(error.message);

        throw error;
      }
    },
    []
  );
  return {
    error,
    loading,
    request,
  };
};
