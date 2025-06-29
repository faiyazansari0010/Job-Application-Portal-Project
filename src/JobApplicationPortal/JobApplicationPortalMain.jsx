import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import JobDetailsPage from "./Pages/JobDetailsPage";
import ProilePage from "./Pages/ProfilePage";
import ApplicationPage from "./Pages/ApplicationPage";
import ApplicationSummaryPage from "./Pages/ApplicationSummaryPage"
import ApplicationListPage from "./Pages/ApplicationListPage";
import UserProvider from "./Context/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const JobApplicationPortalMain = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobDetailsPage/:jobID" element={<JobDetailsPage />} />
          <Route path="/profilePage" element={<ProilePage />} />
          <Route path="/applicationForm/:jobID" element={<ApplicationPage />} />
          <Route path="/applications/:jobID" element={<ApplicationSummaryPage />} />
          <Route path="/applicationsList" element={<ApplicationListPage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default JobApplicationPortalMain;
