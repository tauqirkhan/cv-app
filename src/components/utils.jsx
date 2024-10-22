export const InputText = ({
  labelText,
  text,
  handler,
  type = "text",
  placeHolder = "",
}) => {
  return (
    <label>
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

export const TextArea = ({ labelText, text, handler, placeHolder = "" }) => {
  return (
    <label>
      {labelText}
      {": "}
      <textarea value={text} onChange={handler} placeholder={placeHolder} />
    </label>
  );
};
