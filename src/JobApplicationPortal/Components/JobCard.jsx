import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => (
  <div
    style={{
      border: "1px solid black",
      padding: 10,
      margin: 10,
    }}
  >
    <h3>{job.title}</h3>
    <p>{job.company}</p>
    <p>{job.description}</p>
    <Link to={`/jobDetailsPage/${job.id}`}>
      <button>View Details</button>
    </Link>
  </div>
);

export default JobCard;
