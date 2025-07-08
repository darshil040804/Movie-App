import React from 'react';
import searchIcon from '../assets/search.svg';

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <section className="search">
            <div>
                <img src={searchIcon} alt="Search" />
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
