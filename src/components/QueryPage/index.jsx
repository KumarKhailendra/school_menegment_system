"use client";
import React, { useState } from 'react';
import './QueryPage.css';

const QueryPage = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the query
    console.log('Query submitted:', query);
  };

  return (
    <div className="query-page">
      <h1>Query Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your query"
          value={query}
          onChange={handleQueryChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default QueryPage;
