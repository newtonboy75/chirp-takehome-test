import React, { useEffect } from "react";
import useCompanyDetails from "../hooks/useCompanyDetails";
import Image from "next/image";

interface CompanyDetailsProps {
  entityId: string;
}

const CompanyDetails = ({ entityId }: CompanyDetailsProps) => {
  const { data, loading, error, fetchCompanyDetails } = useCompanyDetails();

  useEffect(() => {
    const fetchDetails = () => {
      const fieldIds =
        "created_at,entity_def_id,facebook,facet_ids,identifier,image_id,image_url,linkedin,location_identifiers,name,permalink,short_description,stock_exchange_symbol,twitter,updated_at,uuid,website_url";
      fetchCompanyDetails(entityId, fieldIds);
    };

    if (entityId) {
      fetchDetails();
    }
    
    //console.log(data);
  }, [entityId]); //re-render when entity id changes

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {data && (
        <>
          <div className="container mx-auto px-4 lg:w-3/5 lg:mt-36 mt-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Image Column */}
              <div className="md:w-1/4 flex flex-col items-center">
                <Image
                  src={data.properties.image_url}
                  alt={data.properties.name}
                  width={300}
                  height={300}
                />
              </div>

              {/* Details Column */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-600">
                  {data.properties.name}
                </h2>
                <p className="text-gray-700 mb-2 text-lg">
                  {data.properties.short_description}
                </p>

                <p className="text-blue-500 mb-4">
                  Website:{" "}
                  <a
                    href={data.properties.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.properties.website_url}
                  </a>
                </p>
                <p className="text-blue-500 mb-4">
                  Facebook:{" "}
                  <a
                    href={data.properties.facebook.value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.properties.facebook.value}
                  </a>
                </p>
                <p className="text-blue-500  mb-4">
                  Twitter:{" "}
                  <a
                    href={data.properties.twitter.value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.properties.twitter.value}
                  </a>
                </p>
                <p className="text-green-500 mb-4">
                  {data.properties.stock_exchange_symbol}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyDetails;
