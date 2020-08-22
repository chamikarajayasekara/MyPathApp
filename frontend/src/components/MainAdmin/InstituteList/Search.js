import React, {Component, useState} from 'react';
import { Input } from 'antd';
const { Search } = Input;

const SearchBar= ({onSearch}) =>{
    const [search,setSearch] = useState('');

    const onInputChange = (value) => {
        setSearch(value);
        onSearch(value)
    }
    return (
        <div>
            <Search
                type="text"
                style={{width:"500px"}}
                placeholder="Search Your Course"
                className="p-3"
                value={search}
                onChange={(e) => onInputChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
