import React, { useState } from 'react';
import Filters from './components/Filters/Filters';
import Listing from './components/Listing/Listing';
import rawData from './data/data.json';

function App() {
  const [jobs, setJobs] = useState(Array.from(rawData));

  return (
    <div className="App">
      <p className="muted-text">Filter by category</p>
      <Filters />

      <p className="muted-text">Offers available</p>
      <Listing jobs={jobs} />
    </div>
  );
}

export default App;
