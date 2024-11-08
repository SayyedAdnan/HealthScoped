import './Search.css';
import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`https://api.fda.gov/food/event.json?search=${query}&limit=15`);
    const result = await response.json();
    setData(result.results || []);
  };

  return (
    <>
      <h1 className="searchTitle">Search🔎</h1>
      
      <div className="search-container">
        <label className="search-label">Brand Name: </label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="search-bar"
          placeholder="Milk"
        />
        <button className="search-button" onClick={fetchData}>Search</button>
      </div>

      <div className="grid">
        {data.map((report, i) => (
          <div key={i} className="panel" onClick={() => setSelectedReport(report)}>
            <h3 style={{ backgroundColor: '#7D3C98' }}>{report.products[0].name_brand}</h3>
            <p style={{ backgroundColor: '#7D3C98' }}>{report.products[0].industry_name}</p>
          </div>
        ))}
      </div>

      {selectedReport && (
        <div className="modal" onClick={() => setSelectedReport(null)}>
          <div className="modal-content">
            <h3 style={{ backgroundColor: 'white' }}>Report #{selectedReport.report_number}</h3>
            <p style={{ backgroundColor: 'white' }}><strong style={{ backgroundColor: 'white' }}>Date:</strong> {selectedReport.date_created}</p>
            <p style={{ backgroundColor: 'white' }}><strong style={{ backgroundColor: 'white' }}>Gender:</strong> {selectedReport.consumer?.gender || 'Unknown'}</p>
            <p style={{ backgroundColor: 'white' }}><strong style={{ backgroundColor: 'white' }}>Outcomes:</strong> {selectedReport.outcomes.join(', ')}</p>
          </div>
        </div>
      )}
    </>
  );
};





export default Search;
