import React from "react";
import { useSelector } from "react-redux";
import { jobs } from "./HomePage";
import { useDispatch } from "react-redux";
import { deleteApplication } from "../Redux/applicationSlice.jsx";
import { Link } from "react-router-dom";

const ApplicationListPage = () => {
  const dispatch = useDispatch();
  const applicationsList = useSelector(
    (state) => state.applications.applicationsList
  );

  const getCurrentJobDetails = (jobID) => {
    return jobs.find((job) => job.id === jobID);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Applications List</h1>
      {applicationsList.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {applicationsList.map((item, index) => {
            const jobDetails = getCurrentJobDetails(item.jobID);

            if (!jobDetails) return null;

            return (
              <div
                key={`${item.jobID}-${index}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid green",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Job Title:</strong> {jobDetails.title}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Applicant Name:</strong> {item.name}
                  </div>
                  <div>
                    <strong>Description:</strong> {jobDetails.description}
                  </div>
                </div>
                <div>
                  <Link to={`/applicationForm/${item.jobID}`}> 
                    <button>Edit Application</button>
                  </Link>
                  <button onClick={() => dispatch(deleteApplication(item.jobID))} style={{ margin: "0px 20px" }}>Delete Application</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ApplicationListPage;
