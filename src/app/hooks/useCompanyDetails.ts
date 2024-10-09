import { useState } from "react";
import axios from "axios";
import { Company } from "../types/company";

const useCompanyDetails = () => {
  const [data, setData] = useState<Company | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchCompanyDetails = async (entityId: string, fieldIds: string) => {
    setLoading(true);
    setError(null);

    //console.log(entityId, fieldIds)

    try {
      const response = await axios.get("/api/entity", {
        params: { entity_id: entityId, field_ids: fieldIds }, // Proxy route
      });
      
      //console.log(response.data);

      setData(response.data); // Store the response data
      
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchCompanyDetails };
};

export default useCompanyDetails;
