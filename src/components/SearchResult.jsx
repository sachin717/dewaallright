import React from "react";
import { suggestions, suggestedProducts, pages } from "./Data";
import { Link } from "react-router-dom";

const SearchResult = ({ searchTerm }) => {
  console.log("suggestions ", suggestions);

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion?.text?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderSuggestions = () => {
    if (filteredSuggestions.length > 0) {
      return filteredSuggestions.slice(0, 4).map((suggestion) => (
        <div key={suggestion.id}>
          <Link to={suggestion.urlLink}> {suggestion.text} </Link>
        </div>
      ));
    }
  };

  const filteredProducts = suggestedProducts.filter((product) =>
    product?.title?.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderProducts = () => {
    if (filteredProducts.length > 0) {
      return filteredProducts.slice(0, 4).map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}> 
          <div className="searchResultProduct">
          <div className="serachResultProductImg">
            <img src={product.imgURL} alt="product.imgURL" height="50px" width="50px" />
            </div>
          <div className="serachResultProductName">{product.title}</div>
          </div>
           </Link>
        </div>
      ));
    }
  };

  const filteredPages = pages.filter((page)=>
    page.text.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  )

  const renderPages = () => {
    if(filteredPages.length>0){
      return filteredPages.slice(0, 4).map((page)=>
        <div key={page.id}>
          <Link to={page.urlLink}>
          <div className="searchResultpageName"> {page.text} </div>
            
           </Link>
        </div>
      )
    }
  }


const hasSuggestions = filteredSuggestions.length > 0;
  const hasProducts = filteredProducts.length > 0;
  const hasPages = filteredPages.length > 0;

  const leftSideFullWidth = !hasProducts;
  const rightSideFullWidth = !hasSuggestions && !hasPages;

  return (
    <>
    <div className="searchResultBody">
      <div className="searchResultBodyMain">
        {(hasSuggestions || hasPages) && (
          <div
            className={`searchResultLeftSide ${leftSideFullWidth ? "fullWidth" : ""}`}
          >
            {hasSuggestions && (
              <div className="searchResultSuggestions">
                <div className="searchResultHeadingText">Suggestions</div>
                <div className="renderSuggestion">{renderSuggestions()}</div>
              </div>
            )}
            {hasPages && (
              <div className="pages">
                <div className="searchResultHeadingText">Pages</div>
                {renderPages()}
              </div>
            )}
          </div>
        )}
        {hasProducts && (
          <div
            className={`searchResultRightSide ${rightSideFullWidth ? "fullWidth" : ""}`}
          >
            <div className="searchResultHeadingText">Products</div>
            <div className="searchsuggestedProduct">{renderProducts()}</div>
          </div>
        )}
        {!hasSuggestions && !hasProducts && !hasPages && (
          <div className="noResultFound">No results found</div>
        )}
      </div>
      <div className="searchResultBodyFooter">
        <div className="footerText">Search for "{searchTerm }" </div>
        <div className="footerIcon"></div>
      </div>
    </div>
    <div className="searchResultCartain">
    </div>
    </>
  );
};

export default SearchResult;
