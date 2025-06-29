import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { jobs } from "./HomePage";
import { useSelector } from "react-redux";

const JobDetailsPage = () => {
  const navigate = useNavigate();
  const applicationsList = useSelector((state) => state.applications.applicationsList)
  const { jobID } = useParams();
  const selectedJob = jobs.find((job) => job.id === jobID);

  const handleApplyNow = () => {
    for (let i = 0; i < applicationsList.length; i++) {
      if (jobID === applicationsList[i].jobID) {
        alert("You have already applied for this job !")
        return;
      }
    }
    navigate(`/applicationForm/${jobID}`)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1> Company : {selectedJob.company}</h1>
      <h4>Job Title : {selectedJob.title}</h4>
      <p>
        <span style={{ fontWeight: "bold" }}>Full Description :</span>{" "}
        {selectedJob.fullDescription}
      </p>
      <div>
        <p style={{ fontWeight: "bold" }}>Requirements : </p>
        <ul>
          <li>{selectedJob.requirements[0]}</li>
          <li>{selectedJob.requirements[1]}</li>
          <li>{selectedJob.requirements[2]}</li>
        </ul>
      </div>
      <p style={{ fontWeight: "bold" }}>Salary : {selectedJob.salary}</p>

      <button onClick={() => handleApplyNow()}>Apply now</button>
    </div>
  );
};

export default JobDetailsPage;
