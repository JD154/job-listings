import React from 'react';
import ListJob from './ListJob/ListJob';

const Listing = ({ jobs }) => (
  <div>
    {jobs.map((job) => <ListJob job={job} key={job.id} />)}
  </div>
);

export default Listing;
