import React, {useState} from "react";
import { IoClose } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import SearchResult from "./SearchResult";

const SearchBar = ({ handleSearchBar, handleSearchResult }) => {
    const[searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    handleSearchResult(e.target.value);
  };
  
  console.log("searchTerm: ",searchTerm)

  const handleClearSearch = () => {
    setSearchTerm("");
    handleSearchResult("");
  };

  const handleCloseSearchBar = () => {
    setSearchTerm("");
    handleSearchResult("");
    handleSearchBar();
  };



  return (
    <>
      <div className="searchBarContainer">
        <div className="searchBarHeader">
          <div className="searchBarBox">
            <div className="searchBarInputWrapper">
              <div className="searchBarInput">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
                {searchTerm && (
                  <div className="searchBarRemoveSearch" onClick={handleClearSearch}>
                    <IoCloseCircleOutline />
                  </div>
                )}
              </div>
              <div className="searchBarSearchIcon">
                <GoSearch />
              </div>
            </div>
            <div className="searchBarCloseIcon" onClick={handleCloseSearchBar}>
              <IoClose />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
