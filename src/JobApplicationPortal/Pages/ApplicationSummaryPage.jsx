import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ApplicationSummaryPage = () => {
  const navigate = useNavigate();
  const { jobID } = useParams();
  const applicationsList = useSelector(
    (state) => state.applications.applicationsList
  );
  let currentApplication;
  for (let i = 0; i < applicationsList.length; i++) {
    if (jobID === applicationsList[i].jobID) {
      currentApplication = applicationsList[i];
      break;
    }
  }
  return (
    <>
      <div style={{ padding: "10px", fontSize: "1.2rem" }}>
        <h1>Application Summary</h1>
        <div>
          <p>Job ID: {jobID}</p>
          <p>Name: {currentApplication.name}</p>
          <p>Email: {currentApplication.email}</p>
          <p>Phone No: {currentApplication.phoneNo}</p>

          <p>Experience: {currentApplication.yoe}</p>
          <p>Skills: {currentApplication.skills}</p>
          <p>Cover Letter: {currentApplication.coverLetter}</p>
          <p>Start Date: {currentApplication.startDate}</p>
        </div>

        <button onClick={() => navigate(`/applicationForm/${jobID}`)}>Edit Application</button>
      </div>
    </>
  );
};

export default ApplicationSummaryPage;
