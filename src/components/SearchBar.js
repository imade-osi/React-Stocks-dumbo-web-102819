import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <label>
        <strong>Sort by:</strong>
        <select onChange={(event) => { props.handleSort(event) }}>
          <option value="Alphabetically">Alphabetically</option>
          <option value="Price">Price</option>
        </select>
      </label>
    <br />

    <label>
      <strong>Filter:</strong>
      <select onChange={(event) => { props.handleFilter(event) }}>
          <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Sportswear">Sportswear</option>
        <option value="Finance">Finance</option>
      </select>
    </label>



    </div>
  );
}


export default SearchBar;
