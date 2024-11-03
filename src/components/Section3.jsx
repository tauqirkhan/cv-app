import { InputText, TextArea, FromToDateInputs } from "./utils";
import "../styles/section3.css";

export default function Section3({
  companyName,
  handleCompanyName,
  companyStartDate,
  handleCompanyStartDate,
  companyEndDate,
  handleCompanyEndDate,
  companyTitle,
  handleCompanyTitle,
  companyDescription,
  handleCompanyDescription,
}) {
  return (
    <section className="section3">
      <h1>Practical Experience</h1>
      <div className="experienceInputs">
        <InputText
          labelText={"Company Name"}
          text={companyName}
          handler={handleCompanyName}
          placeHolder={"Company Name"}
        />
        <InputText
          labelText={"Title"}
          text={companyTitle}
          handler={handleCompanyTitle}
          placeHolder={"Title Name"}
        />
        <TextArea
          labelText={"Description"}
          text={companyDescription}
          handler={handleCompanyDescription}
        />
        <FromToDateInputs
          startDate={companyStartDate}
          handleStartDate={handleCompanyStartDate}
          endDate={companyEndDate}
          handleEndDate={handleCompanyEndDate}
        />
      </div>
    </section>
  );
}
