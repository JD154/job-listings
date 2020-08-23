import React from 'react';

const ListJob = ({ job }) => (
  <div className="card job-wrapper">
    <div className="split-section">
      {console.log(job)}
      <div className="job-header">
        <p>{job.company}</p>

        <div className="plus">
          {job.new
            && (<p className="plus-badge new">New!</p>)}
          {job.featured
            && (<p className="plus-badge featured">Featured</p>)}
        </div>
      </div>
      <h1>{job.position}</h1>
      <div className="job-details">
        <p>{job.postedAt}</p>
        <p>{job.contract}</p>
        <p>{job.location}</p>
      </div>
    </div>
    <div className="split-section languages-wrapper">
      {job.languages.map((language) => <p className="job-badge">{language}</p>)}
    </div>
  </div>
);

export default ListJob;
