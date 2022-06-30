import { useState } from "react";
import "./Search.css";
import SearchIcon from "assets/search-small.svg";

const Search =({setSearch})=>{
    const [value,setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event) =>{
        event.prevDefault();
        setSearch(value);
        setValue("")
    };
    return (
        <form autoComplete="off" onSubmit={handleSubmit} className="search-form">
          <label htmlFor="search">
            <img className="search-form_icon" src={SearchIcon} alt="search" />
          </label>
          <input
            className="search-form_input"
            id="search"
            type="search"
            placeholder="Enter GitHub username"
            value={value}
            onChange={handleChange}
          />
        </form>
      );
};
export default Search;