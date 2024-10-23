import { useState } from "react";
import "./App.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeStartDate, setCollegeStartDate] = useState("");
  const [collegeEndDate, setCollegeEndDate] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("");
  const [companyEndDate, setCompanyEndDate] = useState("");

  const handleFullName = handle(setFullName);
  const handleEmail = handle(setEmail);
  const handleContactNo = handle(setContactNo);

  const handleSchoolName = handle(setSchoolName);
  const handleSchoolStartDate = handle(setSchoolStartDate);
  const handleSchoolEndDate = handle(setSchoolEndDate);

  const handleCollegeName = handle(setCollegeName);
  const handleCollegeStartDate = handle(setCollegeStartDate);
  const handleCollegeEndDate = handle(setCollegeEndDate);

  const handleCompanyName = handle(setCompanyName);
  const handleCompanyTitle = handle(setCompanyTitle);
  const handleCompanyDescription = handle(setCompanyDescription);
  const handleCompanyStartDate = handle(setCompanyStartDate);
  const handleCompanyEndDate = handle(setCompanyEndDate);

  return (
    <>
      <main className="leftSide">
        <Section1
          name={fullName}
          email={email}
          contact={contactNo}
          handleFullName={handleFullName}
          handleEmail={handleEmail}
          handleContactNo={handleContactNo}
        />
        <Section2
          schoolName={schoolName}
          handleSchoolName={handleSchoolName}
          schoolStartDate={schoolStartDate}
          handleSchoolStartDate={handleSchoolStartDate}
          schoolEndDate={schoolEndDate}
          handleSchoolEndDate={handleSchoolEndDate}
          collegeName={collegeName}
          handleCollegeName={handleCollegeName}
          collegeStartDate={collegeStartDate}
          handleCollegeStartDate={handleCollegeStartDate}
          collegeEndDate={collegeEndDate}
          handleCollegeEndDate={handleCollegeEndDate}
        />
        <Section3
          companyName={companyName}
          handleCompanyName={handleCompanyName}
          companyTitle={companyTitle}
          handleCompanyTitle={handleCompanyTitle}
          companyDescription={companyDescription}
          handleCompanyDescription={handleCompanyDescription}
          companyStartDate={companyStartDate}
          handleCompanyStartDate={handleCompanyStartDate}
          companyEndDate={companyEndDate}
          handleCompanyEndDate={handleCompanyEndDate}
        />
      </main>
      <main className="rightSide">
        <GeneralInfo />
        <Education />
        <Experience />
      </main>
    </>
  );
}

function handle(stateFunction) {
  return (e) => {
    stateFunction(e.target.value);
  };
}

export default App;
