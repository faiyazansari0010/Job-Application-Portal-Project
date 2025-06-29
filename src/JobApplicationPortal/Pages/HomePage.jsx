import React from "react";
import JobCard from "../Components/JobCard";

export const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Corp",
    description: "React dev needed",
    fullDescription:
      "We are looking for a skilled frontend developer with expertise in React. You will be responsible for building user-friendly interfaces and collaborating with backend developers.",
    requirements: [
      "Strong proficiency in JavaScript and React",
      "Experience with Redux and REST APIs",
      "Familiarity with version control (Git)",
    ],
    salary: "$70,000 - $90,000 per year",
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "Server Inc",
    description: "Node.js dev needed",
    fullDescription:
      "Join our backend engineering team to design scalable APIs and manage server-side logic using Node.js. Work closely with frontend and DevOps teams.",
    requirements: [
      "Strong knowledge of Node.js and Express",
      "Experience with databases like MongoDB or PostgreSQL",
      "Understanding of RESTful APIs and microservices",
    ],
    salary: "$80,000 - $100,000 per year",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    company: "DesignPro",
    description: "Creative designer with Figma skills needed",
    fullDescription:
      "We're seeking a talented UI/UX designer to create intuitive and visually appealing designs. You'll collaborate with product managers and developers to deliver top-tier user experiences.",
    requirements: [
      "Proficiency with Figma and Adobe XD",
      "Strong portfolio of design projects",
      "Understanding of user-centered design principles",
    ],
    salary: "$65,000 - $85,000 per year",
  },
  {
    id: "4",
    title: "Full Stack Developer",
    company: "WebWorks",
    description: "Experienced with MERN stack",
    fullDescription:
      "Looking for a versatile developer skilled in the MERN stack to build robust web applications from frontend to backend.",
    requirements: [
      "Proficiency in MongoDB, Express, React, and Node.js",
      "Experience with REST APIs",
      "Familiarity with deployment and CI/CD",
    ],
    salary: "$90,000 - $110,000 per year",
  },
  {
    id: "5",
    title: "Mobile App Developer",
    company: "Appify",
    description: "React Native developer required",
    fullDescription:
      "Join our mobile team to build high-quality cross-platform mobile applications using React Native.",
    requirements: [
      "Strong experience with React Native",
      "Familiarity with iOS and Android deployment",
      "Experience with mobile performance optimization",
    ],
    salary: "$80,000 - $95,000 per year",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudOps",
    description: "CI/CD pipeline and AWS experience needed",
    fullDescription:
      "Seeking a DevOps Engineer to automate and improve development and deployment processes, with a focus on AWS and CI/CD tools.",
    requirements: [
      "Hands-on experience with CI/CD tools (Jenkins, GitHub Actions)",
      "AWS cloud infrastructure knowledge",
      "Scripting experience with Bash, Python",
    ],
    salary: "$95,000 - $120,000 per year",
  },
];

const HomePage = () => (
  <div>
    <h2>Available Jobs</h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </div>
);

export default HomePage;
