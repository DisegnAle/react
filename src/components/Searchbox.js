import React from 'react';



function Searchbox({searchField, searchChange}) {
  return (
    <div className="pa2">
        <input onChange={searchChange} className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" />
    </div>
  );
}

export default Searchbox;
