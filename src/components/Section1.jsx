import { InputText } from "./utils";
import "../styles/section1.css";

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
      <div className="generalInputs">
        <InputText
          labelText={"Name"}
          text={name}
          handler={handleFullName}
          placeHolder={"Your name"}
          maxLength={15}
        />
        <InputText
          type={"email"}
          labelText={"Email"}
          text={email}
          handler={handleEmail}
          placeHolder={"Email address"}
        />
        <InputText
          type={"tel"}
          labelText={"Contact"}
          text={contact}
          handler={handleContactNo}
          placeHolder={"Contact Number"}
        />
      </div>
    </section>
  );
}
