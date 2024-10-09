import React, { useState } from "react";
import useAutocomplete from "../hooks/useAutoComplete";

const CompanyAutoComplete = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error, fetchAutocompleteData } = useAutocomplete();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetchAutocompleteData(query); // Fetch data based on query string
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a company..."
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p>Error fetching data: {error.message}</p>}

      {data && (
        <ul>
          {data && data.entities && data.entities.length > 0 && (
            <ul>
              {data.entities.map((item) => (
                <li key={item.identifier.uuid}>
                  <strong>{item.identifier.value}</strong>
                  <br />
                  <small>{item.short_description}</small>
                </li>
              ))}
            </ul>
          )}
        </ul>
      )}
    </div>
  );
};

export default CompanyAutoComplete;
