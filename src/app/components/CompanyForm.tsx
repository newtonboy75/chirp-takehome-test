"use client";
import React, { useState, useRef, useEffect } from "react";
import useAutocomplete from "../hooks/useAutoComplete";
import { AutocompleteItem } from "../types/company";
import styles from "../styles/CompanyForm.module.css"; // Import your CSS module
import CompanyDetails from "./CompanyDetails";

const CompanyForm = () => {
  const [domain, setDomain] = useState(""); // Input value state
  const { data, loading, error, fetchAutocompleteData } = useAutocomplete();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [selectedCompany, setSelectedCompany] =
    useState<AutocompleteItem | null>(null); // Selected company state

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const stringUrl = e.target.value;
    setDomain(stringUrl); // Set input value

    // Only fetch autocomplete data if input is not empty
    if (stringUrl) {
      fetchAutocompleteData(stringUrl); // Fetch autocomplete suggestions
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
      setSelectedCompany(null);
    }
  };

  // Close dropdown if clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false); // Close dropdown when clicking outside
    }
  };

  useEffect(() => {
    // Attach the event listener for detecting outside clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle clicking on a dropdown item and set selected company
  const handleItemClick = (item: AutocompleteItem) => {
    setSelectedCompany(item);
    setDropdownOpen(false);

    //console.log(item.identifier.uuid)
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          value={domain} // Input value is independent of the selected company
          onChange={handleChange} // Handle input changes
          placeholder="Enter company domain"
          required
          className={styles.input} // Apply custom styles
        />
      </form>

      {/* Display loading and error messages */}
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}

      {/* Display dropdown with autocomplete suggestions */}
      {isDropdownOpen && data && data.entities && data.entities.length > 0 && (
        <ul className={styles.dropdown} ref={dropdownRef}>
          {data.entities.map((item: AutocompleteItem) => (
            <li
              key={item.identifier.uuid}
              className={styles.dropdownItem}
              onClick={() => handleItemClick(item)} // Handle clicking a suggestion
            >
              <strong>{item.identifier.value}</strong>
              <br />
              <small>{item.short_description}</small>
            </li>
          ))}
        </ul>
      )}

      {/* Display selected company details if one is selected */}
      {selectedCompany && !isDropdownOpen && (
        <CompanyDetails entityId={selectedCompany.identifier.uuid} />
      )}
    </div>
  );
};

export default CompanyForm;
