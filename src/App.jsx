import { useState } from "react";
import "./App.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import * as htmlToImage from "html-to-image";

function App() {
  const [fullName, setFullName] = useState("Edit Name");
  const [email, setEmail] = useState("edit@name.com");
  const [contactNo, setContactNo] = useState("555-555-5555");

  const [schoolName, setSchoolName] = useState("Edit School");
  const [schoolStartDate, setSchoolStartDate] = useState("0000-00-00");
  const [schoolEndDate, setSchoolEndDate] = useState("0000-00-00");
  const [collegeName, setCollegeName] = useState("Edit College");
  const [collegeStartDate, setCollegeStartDate] = useState("0000-00-00");
  const [collegeEndDate, setCollegeEndDate] = useState("present");

  const [companyName, setCompanyName] = useState("Edit Company name");
  const [companyTitle, setCompanyTitle] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("0000-00-00");
  const [companyEndDate, setCompanyEndDate] = useState("present");

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

  function handleSubmit(e) {
    e.preventDefault();
    htmlToImage
      .toJpeg(document.querySelector(".rightSide"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  }

  return (
    <>
      <form className="download" onSubmit={handleSubmit}>
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
          <div className="downloadDiv">
            <button className="downloadBtn" type="submit">
              Download
            </button>
          </div>
        </main>
        <main className="rightSide">
          <GeneralInfo
            fullName={fullName}
            companyTitle={companyTitle}
            contactNo={contactNo}
            email={email}
          />
          <Education
            schoolName={schoolName}
            schoolStartDate={schoolStartDate}
            schoolEndDate={schoolEndDate}
            collegeName={collegeName}
            collegeStartDate={collegeStartDate}
            collegeEndDate={collegeEndDate}
          />
          <Experience
            companyName={companyName}
            companyStartDate={companyStartDate}
            companyEndDate={companyEndDate}
            companyTitle={companyTitle}
            companyDescription={companyDescription}
          />
        </main>
      </form>
    </>
  );
}

function handle(stateFunction) {
  return (e) => {
    stateFunction(e.target.value);
  };
}

export default App;
