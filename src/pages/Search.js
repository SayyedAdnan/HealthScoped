
import './Search.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

import { createClient } from "@supabase/supabase-js";



async function incrementBrandCounter(brandName) {
  console.log("print: " + process.env.TEST_KEY);
  const supabase = createClient("https://qyblpzbplibhzemkkcoe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5YmxwemJwbGliaHplbWtrY29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4NzgyMDAsImV4cCI6MjA0NDQ1NDIwMH0.CTzFjfN-tavajzhPUTd-0LQjCEJJsLBgADYEn2SGFks");
  const { data: existingBrand, error: fetchError } = await supabase
    .from('brandcounter')
    .select('scoped')
    .eq('brand_name', brandName)
    .single();

  let newCounter;

  if (existingBrand) {
    
    newCounter = existingBrand.scoped + 1;
  }else{
    newCounter = 1;
  }

  const {} = await supabase
    .from('brandcounter')
    .upsert([{ brand_name: brandName, scoped: newCounter }], { onConflict: 'brand_name' });
}

const Search = () => {
  let empty = '';
  
  const [Brand, setBrand] = useState(empty);
  empty = [];
  const [data, setData] = useState(empty);
  empty = null;
  const [detail, setdetail] = useState(empty);
  let check = true;
  const [filterField, setFilterField] = useState(''); 
  const [filterValue, setFilterValue] = useState('');

  const getAPI = async () => {
    let currAPI = document.getElementById("apiChoice").value;

    let filters = [];
    if (Brand) filters.push(`product_description:${Brand}`);
    if (filterField && filterValue) filters.push(`${filterField}:${filterValue}`);
    const query = filters.length > 0 ? `search=${filters.join('+')}` : '';
    
    let response = await fetch(`https://api.fda.gov/${currAPI}/event.json?search=${Brand}&limit=15`);
    if (!response.ok) {
      
      alert('Nothing Found')
      window.location.reload();

      response = await fetch(`https://api.fda.gov/Food/event.json?search=&limit=15`);
    }
    console.log(response)
    const result = await response.json();
    console.log(result)
    let res = [];
    if (result) {
      res = result.results
    }
    setData(res);
    incrementBrandCounter(Brand)
  };

  return (
    <>
      <h1 className="searchTitle">Search🔎</h1>
      <title>HealthScoped🔎</title>
      <div className="searchBox">
        <label className="searchLabel">Brand Name: </label>
        <input
          value={Brand}
          onChange={(searchBox) => setBrand(searchBox.target.value)}
          type="text"
          className="search-bar"
          placeholder="Milk..."
        />
        <button className="searchSubmit" onClick={getAPI}>Search</button>
        <select id="apiChoice">
          <option value="Food">Food</option>
          <option value="Drug" disabled> Drug</option>
          <option value="Device" disabled>Device</option>
        </select>

        <label className="searchLabel">Filter Field:</label>
        <select
          className="searchDropdown"
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
        >
          <option value="">Select a Field</option>
          <option value="address_1">Address 1</option>
          <option value="address_2">Address 2</option>
          <option value="center_classification_date">Center Classification Date</option>
          <option value="city">City</option>
          <option value="classification">Classification</option>
          <option value="code_info">Code Info</option>
          <option value="country">Country</option>
          <option value="distribution_pattern">Distribution Pattern</option>
          <option value="event_id">Event ID</option>
          <option value="initial_firm_notification">Initial Firm Notification</option>
          <option value="more_code_info">More Code Info</option>
          <option value="openfda">OpenFDA</option>
          <option value="product_code">Product Code</option>
          <option value="product_description">Product Description</option>
          <option value="product_quantity">Product Quantity</option>
          <option value="product_type">Product Type</option>
          <option value="reason_for_recall">Reason for Recall</option>
          <option value="recall_initiation_date">Recall Initiation Date</option>
          <option value="recall_number">Recall Number</option>
          <option value="recalling_firm">Recalling Firm</option>
          <option value="report_date">Report Date</option>
          <option value="state">State</option>
          <option value="status">Status</option>
          <option value="termination_date">Termination Date</option>
          <option value="voluntary_mandated">Voluntary/Mandated</option>
          <option value="meta">Meta</option>
        </select>

        <label className="searchLabel">Filter Value:</label>
        <input
          type="text"
          className="filterValueInput"
          id="filterValue"
          placeholder="Enter Filter Value"
        />

      </div>
      {check ? (
      <div className="grid" style={{cursor: 'zoom-in'}}>
        {data.map((apiRes, counter) => (
          <div key={counter} className="panel" onClick={() => setdetail(apiRes)}>
            <h3 style={{ backgroundColor: '#7D3C98' }}>{apiRes.products[0].name_brand}</h3>
            <p style={{ backgroundColor: '#7D3C98' }}>{apiRes.products[0].industry_name}</p>
            📄
          </div>
        ))}
      </div>) : (
        <h1>Nothing</h1>
      )};


      <Modal aria-labelledby="modal-modal-title"
        contentLabel="Details" isOpen={!!detail} aria-describedby="modal-modal-description" onRequestClose={() => setdetail(null)}>
        {detail && (
          <div>
            <Typography variant="h2" component="h2">
              {detail.products[0].name_brand}
            </Typography>

            <Typography variant="h4">
              <h3>Report #{detail.report_number}</h3>
              <p><strong>🚹🚺Gender:</strong> {detail.consumer.gender}</p>
              <p><strong>📆Date:</strong> {detail.date_created}</p>
              <p><strong>🧑‍⚕️Outcomes:</strong> {detail.outcomes.join('; ')}</p>
              <p><strong>🫨reactions:</strong> {detail.reactions.join('; ')}</p>
            </Typography>
            <button class="goBackButton" onClick={() => setdetail(null)}>Go Back 🔙</button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Search;
