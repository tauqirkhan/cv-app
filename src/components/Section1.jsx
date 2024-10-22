import { InputText } from "./utils";

export default function Section1({
  name,
  contact,
  email,
  handleContactNo,
  handleEmail,
  handleFullName,
}) {
  return (
    <section className="section1">
      <h1>General Information</h1>
      <InputText labelText={"Name"} text={name} handler={handleFullName} />
      <InputText
        type={"email"}
        labelText={"Email"}
        text={email}
        handler={handleEmail}
      />
      <InputText
        type={"tel"}
        labelText={"Contact"}
        text={contact}
        handler={handleContactNo}
      />
    </section>
  );
}
