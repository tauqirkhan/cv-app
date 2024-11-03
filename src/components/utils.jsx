import "../styles/utils.css";

export const InputText = ({
  labelText,
  text,
  handler,
  type = "text",
  placeHolder = "",
}) => {
  return (
    <label className="labelInput">
      {labelText}
      {": "}
      <input
        type={type}
        value={text}
        onChange={handler}
        placeholder={placeHolder}
      />
    </label>
  );
};

export const TextArea = ({
  labelText,
  text,
  handler,
  placeHolder = "Description",
}) => {
  return (
    <label className="labelInput">
      {labelText}
      {": "}
      <textarea value={text} onChange={handler} placeholder={placeHolder} />
    </label>
  );
};

export const FromToDateInputs = ({
  startDate,
  handleStartDate,
  endDate,
  handleEndDate,
}) => {
  return (
    <div className="dateInputs">
      <InputText
        labelText={"From"}
        text={startDate}
        handler={handleStartDate}
        type={"date"}
      />
      <InputText
        labelText={"To"}
        text={endDate}
        handler={handleEndDate}
        type={"date"}
      />
    </div>
  );
};
