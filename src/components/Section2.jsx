import { InputText } from "./utils";

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
        <InputText
          labelText={"Name"}
          text={schoolName}
          handler={handleSchoolName}
          placeHolder={"School Name"}
        />
        <InputText
          labelText={"From"}
          text={schoolStartDate}
          handler={handleSchoolStartDate}
          type={"date"}
        />
        <InputText
          labelText={"To"}
          text={schoolEndDate}
          handler={handleSchoolEndDate}
          type={"date"}
        />
      </div>
      <div>
        <h2>College</h2>
        <InputText
          labelText={"Name"}
          text={collegeName}
          handler={handleCollegeName}
          placeHolder={"College Name"}
        />
        <InputText
          labelText={"From"}
          text={collegeStartDate}
          handler={handleCollegeStartDate}
          type={"date"}
        />
        <InputText
          labelText={"To"}
          text={collegeEndDate}
          handler={handleCollegeEndDate}
          type={"date"}
        />
      </div>
    </section>
  );
}
