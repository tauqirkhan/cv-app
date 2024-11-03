import { InputText, FromToDateInputs } from "./utils";
import "../styles/section2.css";

export default function Section2({
  schoolName,
  handleSchoolName,
  schoolStartDate,
  handleSchoolStartDate,
  schoolEndDate,
  handleSchoolEndDate,
  collegeName,
  handleCollegeName,
  collegeStartDate,
  handleCollegeStartDate,
  collegeEndDate,
  handleCollegeEndDate,
}) {
  return (
    <section className="section2">
      <h1>Education qualification</h1>
      <div>
        <h2>School</h2>
        <div className="schoolInputs">
          <InputText
            labelText={"Name"}
            text={schoolName}
            handler={handleSchoolName}
            placeHolder={"School Name"}
          />
          <FromToDateInputs
            startDate={schoolStartDate}
            handleStartDate={handleSchoolStartDate}
            endDate={schoolEndDate}
            handleEndDate={handleSchoolEndDate}
          />
        </div>
      </div>
      <div>
        <h2>College</h2>
        <div className="collegeInputs">
          <InputText
            labelText={"Name"}
            text={collegeName}
            handler={handleCollegeName}
            placeHolder={"College Name"}
          />
          <FromToDateInputs
            startDate={collegeStartDate}
            handleStartDate={handleCollegeStartDate}
            endDate={collegeEndDate}
            handleEndDate={handleCollegeEndDate}
          />
        </div>
      </div>
    </section>
  );
}
