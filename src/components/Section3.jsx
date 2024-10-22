import { InputText, TextArea } from "./utils";

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
      <InputText
        labelText={"From"}
        text={companyStartDate}
        handler={handleCompanyStartDate}
        type={"date"}
      />
      <InputText
        labelText={"To"}
        text={companyEndDate}
        handler={handleCompanyEndDate}
        type={"date"}
      />
    </section>
  );
}
