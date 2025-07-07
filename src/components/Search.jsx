import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <section className="search">
            <div>
                <img src="/search.svg" alt="Search" />
                <input
                    type="text"
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </section>
    );
}; 

export default Search;
