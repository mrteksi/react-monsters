import "./search-box.style.css";

const SearchBar = ({ placeholder, className, onChangeHandler }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className={`search-box ${className}`}
      onChange= {onChangeHandler}
    />
  );
};
export default SearchBar;
