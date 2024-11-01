import { useState } from "react";

const SearchFilms = ({ takeQuery }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    takeQuery(query.toLowerCase().trim());
    e.target.reset();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchFilms;
