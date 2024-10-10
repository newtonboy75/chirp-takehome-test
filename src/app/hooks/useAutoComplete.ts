import { useState } from "react";
import axios from "axios";
import { AutocompleteResponse } from "../types/company";

const useAutocomplete = () => {
  const [data, setData] = useState<AutocompleteResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchAutocompleteData = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<AutocompleteResponse>(
        "/api/autocomplete",
        {
          params: { query }, // Use your proxy route
        }
      );
      //console.log(response.data);

      setData(response.data); // Set the fetched data
    } catch (err) {
      setError(err as Error); // Set error state
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return { data, loading, error, fetchAutocompleteData };
};

export default useAutocomplete;
